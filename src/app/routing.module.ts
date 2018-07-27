import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialTableComponent } from './material-table/material-table.component';

export const routes: Routes = [
  //pathMatch: 
  //'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.

  //pathMatch: 
  //'prefix' means, the first route where the path matches the start of the URL is choosen, but then the route matching algorithm continues searching for matching *child routes* where the rest of the URL matches.
  // Redirect when the remaining URL begins with the *redirect route's prefix path*.

  //E.g: Suppose we have path 'dashboard' with child 'home' => url: /dashboard/home
  //Therefore, { path: 'test', redirectTo: 'dashboard', pathMatch: 'prefix' } will redirect /test/home to /dashboard/home (remaining URL maintained)
  //Whereas, { path: 'test', redirectTo: 'dashboard', pathMatch: 'full' } will redirect only /test to /dashboard

  { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: MaterialTableComponent },
];