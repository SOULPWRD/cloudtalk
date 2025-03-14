import type {Product} from "../products/models";

import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {greaterThan} from "./validators";

const greaterThanZero = greaterThan(0);

@Component({
  selector: "app-product-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./product-form.component.html",
  styleUrl: "./product-form.component.scss"
})
export class ProductFormComponent implements OnInit {
  @Input({required: true}) title!: string;
  @Input() data!: Product | undefined;
  @Output() onSubmit = new EventEmitter<Partial<Product>>();
  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(this.data?.name || "", {
        validators: [Validators.required]
      }),
      quantity: new FormControl(this.data?.quantity || "", {
        validators: [Validators.required, greaterThanZero]
      }),
      price: new FormControl(this.data?.price || "", {
        validators: [Validators.required, greaterThanZero]
      })
    });
  }

  get name() {
    return this.productForm.get("name");
  }

  get quantity() {
    return this.productForm.get("quantity");
  }

  get price() {
    return this.productForm.get("price");
  }

  submit() {
    this.onSubmit.emit({id: this.data?.id, ...this.productForm.value});
  }
}
