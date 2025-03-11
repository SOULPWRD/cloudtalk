import {Component, inject} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {ProductsComponent} from "./products/products.component";
import {ProductsService} from "./products/products.service";

@Component({
  selector: "app-root",
  imports: [AsyncPipe, ProductsComponent],
  providers: [ProductsService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  private service = inject(ProductsService);
  products$ = this.service.getProducts();
}
