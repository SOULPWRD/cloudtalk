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
    component.name = "Apple";
    component.price = 1.5;
    component.quantity = 80;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll("p");

    expect(paragraphs[0]?.textContent).toBe("Apple");
    expect(paragraphs[1]?.textContent).toBe("80");
    expect(paragraphs[2]?.textContent).toBe("1.5");
  });
});
