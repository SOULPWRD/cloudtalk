import type {Product} from "./products/models";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {provideHttpClient} from "@angular/common/http";
import {
  provideHttpClientTesting,
  HttpTestingController
} from "@angular/common/http/testing";

import {AppComponent} from "./app.component";
import {ProductsService} from "./products/products-api.service";

const mockProducts: Product[] = [
  {id: "1", name: "Product 1", price: 100, quantity: 1},
  {id: "2", name: "Product 2", price: 200, quantity: 2}
];

describe("AppComponent", () => {
  let httpMock: HttpTestingController;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        ProductsService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("creates the component", () => {
    expect(component).toBeTruthy();
  });

  it("should load products on initialization", async () => {
    fixture.detectChanges();
    const req = httpMock.expectOne({
      method: "GET",
      url: "/api/products"
    });

    // expect(component.products()).toEqual(mockProducts);
    req.flush(mockProducts);
  });

  it("toggles create modal", () => {
    component.toggleCreateModal(true);
    expect(component.showCreateModal()).toBe(true);

    component.toggleCreateModal(false);
    expect(component.showCreateModal()).toBe(false);
  });

  it("opens edit modal with selected product", () => {
    const product = mockProducts[0];
    component.openEditModal(product);

    expect(component.editProduct()).toEqual(product);
    expect(component.showEditModal()).toBe(true);
  });

  it("closes edit modal", () => {
    component.closeEditModal();
    expect(component.showEditModal()).toBe(false);
  });
});
