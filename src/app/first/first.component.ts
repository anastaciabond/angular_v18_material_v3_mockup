import { Component, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FirstFirstComponent } from "../first-first/first-first.component";

import { ComponentMatSelectComponent } from "../shared/component-mat-select/component-mat-select.component";


@Component({
    selector: 'app-first',
    imports: [
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormsModule,
      FirstFirstComponent,
      ComponentMatSelectComponent,
    ],
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss',
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class FirstComponent {
}
