import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";

@Component({
  selector: 'app-component-button-toggle-group',
    imports: [
        MatButtonToggle,
        MatButtonToggleGroup,
    ],
  templateUrl: './component-button-toggle-group.component.html',
  styleUrl: './component-button-toggle-group.component.scss'
})
export class ComponentButtonToggleGroupComponent {

}
