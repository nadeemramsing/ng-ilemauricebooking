import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: '**', redirectTo: '' }
];