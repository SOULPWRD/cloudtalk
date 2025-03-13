import type {Product} from "../products/models";
import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-products-row",
  templateUrl: "./products-row.component.html",
  styleUrl: "./products-row.component.scss"
})
export class ProductsRowComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) quantity!: number;
  @Input({required: true}) price!: number;

  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<Product>();

  deleteProduct() {
    this.delete.emit(this.id);
  }

  updateProduct() {
    this.update.emit({
      id: this.id,
      name: this.name,
      quantity: this.quantity,
      price: this.price
    });
  }
}
