import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "app-modal",
  imports: [],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.scss"
})
export class ModalComponent {
  @Input({required: true}) title!: string;
  @Output() close = new EventEmitter();

  closeModal() {
    this.close.emit(true);
  }
}
