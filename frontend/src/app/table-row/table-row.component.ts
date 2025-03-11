import {Component, Input} from "@angular/core";

@Component({
  selector: "app-table-row",
  templateUrl: "./table-row.component.html",
  styleUrl: "./table-row.component.scss"
})
export class TableRowComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) quantity!: number;
  @Input({required: true}) price!: number;
}
