import {Component, inject, OnInit, signal} from "@angular/core";
import type {Product} from "./products/models";

import {ProductsComponent} from "./products/products.component";
import {ProductsService} from "./products/products-api.service";
import {ModalComponent} from "./modal/modal.component";
import {ProductFormComponent} from "./product-form/product-form.component";

@Component({
  selector: "app-root",
  imports: [ProductsComponent, ModalComponent, ProductFormComponent],
  providers: [ProductsService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent implements OnInit {
  private api = inject(ProductsService);

  showCreateModal = signal(false);
  showEditModal = signal(false);
  products = signal<Product[] | undefined>(undefined);

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  toggleCreateModal(value: boolean) {
    this.showCreateModal.set(value);
  }

  toggleEditModal(value: boolean) {
    this.showEditModal.set(value);
  }

  removeProduct(id: string) {
    this.api.removeProduct(id).subscribe(() => {
      this.products.update((products) =>
        products?.filter((product) => product.id !== id)
      );
    });
  }

  addProduct(product: Omit<Product, "id">) {
    this.api.createProduct(product).subscribe((newProduct) => {
      this.products.update((products) => {
        products?.push(newProduct);
        return products;
      });
      this.toggleCreateModal(false);
    });
  }
}
