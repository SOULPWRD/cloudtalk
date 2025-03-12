import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ReactiveFormsModule} from "@angular/forms";

import {ProductFormComponent} from "./product-form.component";

describe("ProductFormComponent", () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFormComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
  });

  it("creates a component", () => {
    expect(component).toBeTruthy();
  });

  it("sets form default values", () => {
    const data = {
      id: "1",
      name: "Apple",
      price: 0.5,
      quantity: 1
    };
    component.data = data;
    fixture.detectChanges();
    const form = component.productForm;
    expect(form.get("name")?.value).toBe(data.name);
    expect(form.get("quantity")?.value).toBe(data.quantity);
    expect(form.get("price")?.value).toBe(data.price);
  });
});
