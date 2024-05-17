import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './components/models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular app';
  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
