import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ProductsComponent} from "./products.component";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates a component", () => {
    expect(component).toBeTruthy();
  });

  it("emits the createProduct event", () => {
    spyOn(component.onCreate, "emit");
    component.createProduct();
    expect(component.onCreate.emit).toHaveBeenCalled();
  });

  it("displays no products available", () => {
    fixture.detectChanges();
    component.products = [];

    const compiled = fixture.nativeElement as HTMLElement;
    const noContent = compiled.querySelector(".no-content");
    expect(noContent?.textContent).toBe("No products available");
  });
});
