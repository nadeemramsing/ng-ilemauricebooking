import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialTableComponent } from './pages/material-table/material-table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: MaterialTableComponent },
];