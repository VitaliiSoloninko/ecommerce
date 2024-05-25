import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, retry, tap, throwError } from 'rxjs';
import { IProduct } from '../components/models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: IProduct[] = [];

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          // fromString: 'limit=2',
          fromObject: { limit: 10 },
        }),
      })
      .pipe(
        delay(200),
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((prod) => {
          this.products.push(prod);
          console.log(this.products);
        })
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
