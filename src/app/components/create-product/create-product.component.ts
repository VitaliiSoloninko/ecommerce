import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>(''),
  });
  onSubmit() {
    console.log(this.form.value);
    this.productService
      .create({
        title: this.form.value as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 42,
          count: 1,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
