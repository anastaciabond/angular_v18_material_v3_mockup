import { Component, ViewEncapsulation } from "@angular/core";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatOption, MatSelect } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-component-mat-select',
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './component-mat-select.component.html',
  styleUrl: './component-mat-select.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ComponentMatSelectComponent {
  selectedValue: string;
  foods: Food[];

  constructor() {
    this.selectedValue = "";
    this.foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];
  }
}
