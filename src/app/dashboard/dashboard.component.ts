import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import {
  ColDef, // Column Definition Type Interface
  ModuleRegistry,
  RowApiModule,
  ClientSideRowModelModule,
  themeBalham, // Add built-in theme.
  iconSetMaterial, // Add icons.
} from 'ag-grid-community';
import { MatCheckbox } from "@angular/material/checkbox";

ModuleRegistry.registerModules([
  RowApiModule,
  ClientSideRowModelModule,
]);

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
    AgGridAngular,
    MatCheckbox,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // Set built-in theme.
  //public theme = themeBalham;

  // Customizing Ag Grid built-in theme by changing CSS tokens.
  public theme = themeBalham
    .withPart(iconSetMaterial)
    .withParams(
      {
        accentColor: "#D1EF067D",
        backgroundColor: "#07240D",
        borderRadius: 4,
        browserColorScheme: "dark",
        cellHorizontalPaddingScale: 1,
        columnBorder: true,
        fontFamily: {
          googleFont: "Merriweather"
        },
        fontSize: 13,
        foregroundColor: "#D4E8C6",
        headerFontSize: "var(--ag-grid-headerFontSize)",
        iconSize: 16,
        oddRowBackgroundColor: "#031006",
        rowVerticalPaddingScale: 1,
        spacing: 3,
        wrapperBorderRadius: 0
      },
      "green-dark",
    )
    .withParams(
      {
        accentColor: "rgb(133,230,16)",
        backgroundColor: "#dff1c5",
        borderRadius: 4,
        browserColorScheme: "dark",
        cellHorizontalPaddingScale: 1,
        columnBorder: true,
        fontFamily: {
          googleFont: "Merriweather"
        },
        fontSize: 13,
        foregroundColor: "#2d5512",
        headerFontSize: "var(--ag-grid-headerFontSize)",
        iconSize: 16,
        oddRowBackgroundColor: { ref: "accentColor", mix: 0.05 },
        rowVerticalPaddingScale: 1,
        spacing: 3,
        wrapperBorderRadius: 0
      },
      "green-light",
    )
  ;

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

  public setDarkMode(enabled: boolean) {
    document.body.dataset["agThemeMode"] = enabled ? "green-dark" : "green-light";
  }

  ngOnInit() {
    this.setDarkMode(false); // Set Ag Grid theme mode for first render.
  }
}
