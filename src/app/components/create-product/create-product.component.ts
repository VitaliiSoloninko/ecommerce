import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>(''),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
