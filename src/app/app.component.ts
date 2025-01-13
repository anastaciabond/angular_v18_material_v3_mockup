import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ComponentButtonToggleGroupComponent } from "./shared/component-button-toggle-group/component-button-toggle-group.component";
import { ComponentButtonComponent } from "./shared/component-button/component-button.component";
import { ComponentMatSelectComponent } from "./shared/component-mat-select/component-mat-select.component";

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentButtonToggleGroupComponent,
        ComponentButtonComponent,
        ComponentMatSelectComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_18_mockup';
}
