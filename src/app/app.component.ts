import { Component } from '@angular/core';
import { products as data } from './components/data/products';
import { IProduct } from './components/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular app';

  products: IProduct[] = data;
}
