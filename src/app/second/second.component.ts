import { ChangeDetectionStrategy, Component } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComponentButtonToggleGroupComponent } from "../shared/component-button-toggle-group/component-button-toggle-group.component";
import { ComponentButtonComponent } from "../shared/component-button/component-button.component";

@Component({
    selector: 'app-second',
    changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    ComponentButtonToggleGroupComponent,
    ComponentButtonComponent,
  ],
    templateUrl: './second.component.html',
    styleUrl: './second.component.scss'
})
export class SecondComponent {}
