import type {Product} from "../products-row/models";

import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ProductsService {
  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>("http://localhost:4200/api/products");
  }
}
