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
  selector: 'app-ag-grid',
  imports: [
    AgGridAngular,
    MatCheckbox,
  ],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.scss'
})
export class AgGridComponent {
  // Set built-in theme.
  //public theme = themeBalham;

  // Customizing Ag Grid built-in theme by changing CSS tokens.
  public theme = themeBalham
    .withPart(iconSetMaterial)
    .withParams(
      {
        cellHorizontalPaddingScale: 2,
        columnBorder: true,
        fontSize: "var(--ag-grid-font-size)",
        headerFontSize: "var(--ag-grid-header-font-size)",
        spacing: "var(--ag-grid-spacing)",
        wrapperBorderRadius: "var(--ag-grid-wrapper-border-radius)",

        accentColor: "var(--ag-grid-dark-accent-color)",
        backgroundColor: "var(--ag-grid-dark-background-color)",
        borderColor: "var(--ag-grid-dark-border-color)",
        browserColorScheme: "var(--ag-grid-dark-browser-color-scheme)",
        fontFamily: {
          googleFont: "var(--ag-grid-dark-header-font-family)"
        },
        foregroundColor: "var(--ag-grid-dark-foreground-color)",
        headerTextColor: "var(--ag-grid-dark-header-text-color)",
        oddRowBackgroundColor: "var(--ag-grid-dark-odd-row-background-color)",
      },
      "green-dark",
    )
    .withParams(
      {
        cellHorizontalPaddingScale: 2,
        columnBorder: true,
        fontSize: "var(--ag-grid-font-size)",
        headerFontSize: "var(--ag-grid-header-font-size)",
        spacing: "var(--ag-grid-spacing)",
        wrapperBorderRadius: "var(--ag-grid-wrapper-border-radius)",

        accentColor: "var(--ag-grid-light-accent-color)",
        backgroundColor: "var(--ag-grid-light-background-color)",
        borderRadius: 4,
        browserColorScheme: "var(--ag-grid-light-browser-color-scheme)",
        fontFamily: {
          googleFont: "var(--ag-grid-light-font-family)"
        },
        borderColor: "var(--ag-grid-light-border-color)",
        foregroundColor: "var(--ag-grid-light-foreground-color)",
        headerTextColor: "var(--ag-grid-light-header-text-color)",
        oddRowBackgroundColor: "var(--ag-grid-light-odd-row-background-color)",
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
