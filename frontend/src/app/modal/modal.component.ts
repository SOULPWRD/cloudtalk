import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-modal",
  imports: [],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss"
})
export class ModalComponent {
  @Output() toggle = new EventEmitter();

  toggleModal() {
    // closing the modal
    this.toggle.emit(false);
  }
}
