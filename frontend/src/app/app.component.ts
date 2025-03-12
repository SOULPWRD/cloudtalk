import type {Product} from "./products/models";

import {Component, inject, OnInit} from "@angular/core";
import {AsyncPipe} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {ProductsComponent} from "./products/products.component";
import {ProductsService} from "./products/products.service";
import {ModalComponent} from "./modal/modal.component";

@Component({
  selector: "app-root",
  imports: [AsyncPipe, ProductsComponent, ModalComponent],
  providers: [ProductsService],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent implements OnInit {
  private service = inject(ProductsService);
  private productsSubject = new BehaviorSubject<Product[] | null>(null);
  showModal: boolean = false;
  products$ = this.productsSubject.asObservable();

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (data) => this.productsSubject.next(data)
    });
  }

  toggleModal(value: boolean) {
    this.showModal = value;
  }

  removeProduct(id: string) {
    this.service.removeProduct(id).subscribe(() => {
      const updatedProducts = (
        this.productsSubject.getValue() as Product[]
      ).filter((product) => product.id !== id);

      this.productsSubject.next(updatedProducts);
    });
  }
}
