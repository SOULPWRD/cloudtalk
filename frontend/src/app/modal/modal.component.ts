import {HostListener, Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-modal",
  imports: [],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss"
})
export class ModalComponent {
  @Output() onClose = new EventEmitter();

  @HostListener("document:keydown.escape", ["$event"])
  closeModal() {
    // closing the modal
    this.onClose.emit(false);
  }
}
