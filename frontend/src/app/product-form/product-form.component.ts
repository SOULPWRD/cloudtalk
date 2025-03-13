import type {Product} from "../products/models";
import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-product-form",
  imports: [ReactiveFormsModule],
  templateUrl: "./product-form.component.html",
  styleUrl: "./product-form.component.scss"
})
export class ProductFormComponent implements OnInit {
  @Input({required: true}) title!: string;
  @Input() data!: Product | undefined;
  @Output() submittor = new EventEmitter<Product>();
  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(this.data?.name || ""),
      quantity: new FormControl(this.data?.quantity || ""),
      price: new FormControl(this.data?.price || "")
    });
  }

  submit() {
    this.submittor.emit({id: this.data?.id, ...this.productForm.value});
  }
}
