import { Component, OnInit } from '@angular/core';
import { IProduct } from './components/models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular app';
  products: IProduct[] = [];
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }
}
