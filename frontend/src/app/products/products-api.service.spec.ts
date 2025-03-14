import type {Product} from "./models";
import {TestBed} from "@angular/core/testing";
import {provideHttpClient} from "@angular/common/http";
import {
  provideHttpClientTesting,
  HttpTestingController
} from "@angular/common/http/testing";
import {ProductsService} from "./products-api.service";

describe("ProductsService", () => {
  let httpMock: HttpTestingController;
  let service: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("is created", () => {
    expect(service).toBeTruthy();
  });

  describe("getProducts", () => {
    it('makes a GET request to "/api/products"', () => {
      const mockProducts: Product[] = [
        {id: "1", name: "Apple", price: 10, quantity: 1},
        {id: "2", name: "Banana", price: 20, quantity: 2}
      ];
      service.getProducts().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne({
        method: "GET",
        url: "/api/products"
      });
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });
  });

  describe("removeProduct", () => {
    it('makes a DELETE request to "/api/products/{id}"', () => {
      const productId = "1";

      service.removeProduct(productId).subscribe((response) => {
        expect(response).toBeTruthy();
      });

      const req = httpMock.expectOne(`/api/products/${productId}`);
      expect(req.request.method).toBe("DELETE");
      req.flush({}); // Simulate an empty response
    });
  });

  describe("createProduct", () => {
    it('makes a POST request to "/api/products" with product data', () => {
      const newProduct: Omit<Product, "id"> = {
        name: "New Product",
        price: 30,
        quantity: 1
      };
      const createdProduct: Product = {...newProduct, id: "3"};

      service.createProduct(newProduct).subscribe((product) => {
        expect(product).toEqual(createdProduct);
      });

      const req = httpMock.expectOne("/api/products");
      expect(req.request.method).toBe("POST");
      expect(req.request.body).toEqual(newProduct);
      req.flush(createdProduct);
    });
  });

  describe("updateProduct", () => {
    it('makes a PATCH request to "/api/products/{id}" with updated product data', () => {
      const product: Product = {
        id: "1",
        name: "Updated Product",
        price: 15,
        quantity: 1
      };
      const updatePayload = {name: "Updated Product", price: 15, quantity: 1};

      service.updateProduct(product).subscribe((updated) => {
        expect(updated).toEqual(product);
      });

      const req = httpMock.expectOne(`/api/products/${product.id}`);
      expect(req.request.method).toBe("PATCH");
      expect(req.request.body).toEqual(updatePayload);
      req.flush(product);
    });
  });
});
