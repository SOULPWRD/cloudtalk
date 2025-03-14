import type {Product} from "./models";

import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ProductsService {
  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>("/api/products");
  }

  removeProduct(id: string) {
    return this.http.delete(`/api/products/${id}`);
  }

  createProduct(product: Omit<Product, "id">) {
    return this.http.post<Product>("/api/products", product);
  }

  updateProduct({id, ...product}: Product) {
    return this.http.patch<Product>(`/api/products/${id}`, product);
  }
}
