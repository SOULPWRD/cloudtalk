import type {Product} from "./models";
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-products",
  imports: [],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss"
})
export class ProductsComponent {
  @Input({required: true}) products!: Product[] | undefined;
  @Output() onCreate = new EventEmitter();

  createProduct() {
    this.onCreate.emit();
  }
}
