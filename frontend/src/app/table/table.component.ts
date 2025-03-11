import {Component, Input} from "@angular/core";
import {TableRowComponent} from "../table-row/table-row.component";

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

@Component({
  selector: "app-table",
  imports: [TableRowComponent],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss"
})
export class TableComponent {
  @Input({required: true}) products!: Product[];
}
