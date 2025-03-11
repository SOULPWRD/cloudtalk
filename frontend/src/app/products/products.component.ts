import type {Product} from "../products-row/models";
import {Component, Input} from "@angular/core";
import {ProductsRowComponent} from "../products-row/products-row.component";

@Component({
  selector: "app-products",
  imports: [ProductsRowComponent],
  templateUrl: "./products.component.html",
  styleUrl: "./products.component.scss"
})
export class ProductsComponent {
  @Input({required: true}) products!: Product[];
}
