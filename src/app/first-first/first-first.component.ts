import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { ViewEncapsulation } from '@angular/core';
import { ComponentMatSelectComponent } from "../shared/component-mat-select/component-mat-select.component";

@Component({
    selector: 'app-first-first',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDividerModule, MatIconModule, ComponentMatSelectComponent],
    templateUrl: './first-first.component.html',
    styleUrl: './first-first.component.scss',
    //encapsulation: ViewEncapsulation.ShadowDom,
})
export class FirstFirstComponent {
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
