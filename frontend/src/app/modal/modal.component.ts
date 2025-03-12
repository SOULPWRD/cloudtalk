import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-modal",
  imports: [],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss"
})
export class ModalComponent {
  @Input({required: true}) title!: string;
  @Output() toggle = new EventEmitter();

  toggleModal() {
    // closing the modal
    this.toggle.emit(false);
  }
}
