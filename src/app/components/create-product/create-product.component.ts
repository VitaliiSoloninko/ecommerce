import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  form = new FormGroup({
    title: new FormControl<string>(''),
  });
  onSubmit() {
    console.log(this.form.value);
  }
}
