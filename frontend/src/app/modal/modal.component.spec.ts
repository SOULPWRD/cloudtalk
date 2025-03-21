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

  it("emits the closeModal event", () => {
    spyOn(component.onClose, "emit");
    component.closeModal();
    expect(component.onClose.emit).toHaveBeenCalledWith(false);
  });
});
