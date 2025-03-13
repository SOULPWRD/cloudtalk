import type {Product} from "./models";

import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ProductsService {
  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>("http://localhost:4200/api/products");
  }

  removeProduct(id: string) {
    return this.http.delete(`http://localhost:4200/api/products/${id}`);
  }

  createProduct(product: Omit<Product, "id">) {
    return this.http.post<Product>(
      "http://localhost:4200/api/products",
      product
    );
  }
}
