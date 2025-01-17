import { Component } from '@angular/core';
import { AgGridComponent } from "../table/ag-grid/ag-grid.component";

@Component({
  selector: 'app-dashboard',
  imports: [
    AgGridComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
