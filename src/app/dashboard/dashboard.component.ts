import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import {
  ColDef, // Column Definition Type Interface
  ModuleRegistry,
  RowApiModule,
  ClientSideRowModelModule,
  themeBalham, // Add built-in theme.
} from 'ag-grid-community';

ModuleRegistry.registerModules([
  RowApiModule,
  ClientSideRowModelModule,
]);

// Customizing Ag Grid built-in theme by changing CSS tokens.
const myTheme = themeBalham.withParams({
  /* Low spacing = very compact */
  spacing: 2,
  /* Changes the color of the grid text */
  foregroundColor: 'rgb(14, 68, 145)',
  /* Changes the color of the grid background */
  backgroundColor: 'rgb(241, 247, 255)',
  /* Changes the header color of the top row */
  headerBackgroundColor: 'rgb(228, 237, 250)',
  /* Changes the hover color of the row*/
  rowHoverColor: 'rgb(216, 226, 255)',
});

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    AgGridAngular, // Add Angular Data Grid Component
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //public theme = themeBalham; // Set built-in theme.
  public theme = myTheme; // Set customized theme.

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
