import type {Product} from "./models";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ProductsRowComponent} from "../products-row/products-row.component";

@Component({
  selector: "app-products",
  imports: [ProductsRowComponent],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss"
})
export class ProductsComponent {
  @Input({required: true}) products!: Product[];
  @Output() productDelete = new EventEmitter<string>();

  removeProduct(id: string) {
    this.productDelete.emit(id);
  }
}
