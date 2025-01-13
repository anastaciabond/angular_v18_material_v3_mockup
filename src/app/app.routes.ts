import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

export const routes: Routes = [
    { path: "first-comp", component: FirstComponent},
    { path: "second-comp", component: SecondComponent},
    { path: "dashboard", component: DashboardComponent},
];
