import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>;
  term = '';

  constructor(
    public productService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
