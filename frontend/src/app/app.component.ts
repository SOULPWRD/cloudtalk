import type {Product} from "./products-row/models";

import {Component} from "@angular/core";
import {ProductsComponent} from "./products/products.component";

const mocks: Product[] = [
  {
    id: crypto.randomUUID(),
    name: "Apple",
    price: 1,
    quantity: 1
  },
  {
    id: crypto.randomUUID(),
    name: "Banana",
    price: 1.5,
    quantity: 2
  }
];

@Component({
  selector: "app-root",
  imports: [ProductsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  data: Product[] = mocks;
}
