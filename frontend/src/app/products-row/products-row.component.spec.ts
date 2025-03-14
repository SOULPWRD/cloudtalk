import {TestBed} from "@angular/core/testing";

import {ProductsRowComponent} from "./products-row.component";

describe("ProductsRowComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsRowComponent]
    }).compileComponents();
  });

  it("creates a component", () => {
    const fixture = TestBed.createComponent(ProductsRowComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("displays input values", () => {
    const fixture = TestBed.createComponent(ProductsRowComponent);
    const component = fixture.componentInstance;
    component.id = "1";
    component.name = "Apple";
    component.price = 1.5;
    component.quantity = 80;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const spans = compiled.querySelectorAll("span");
    expect(spans[0]?.textContent).toBe("1");
    expect(spans[1]?.textContent).toBe("Apple");
    expect(spans[2]?.textContent).toBe("80");
    expect(spans[3]?.textContent).toBe("1.5");
  });
});
