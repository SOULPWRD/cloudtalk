import {ComponentFixture, TestBed} from "@angular/core/testing";

import {ModalComponent} from "./modal.component";

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates a component", () => {
    expect(component).toBeTruthy();
  });

  it("displays input values", () => {
    component.title = "Hello from modal";
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector("h2");
    expect(heading?.textContent).toBe("Hello from modal");
  });
});
