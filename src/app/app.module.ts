// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material-module';

// components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialTableComponent } from './pages/material-table/material-table.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';

// routing
import { routes } from './/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MaterialTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true })
    // hashtag symbol appears
    // From what I understand, 

    // useHash: true => HashLocationStrategy used (https:// angular.io/api/common/HashLocationStrategy)
    // location.go('/foo') => url becomes example.com/#/foo (i.e. prefix dismissed)
    // used in AngularJS by default?

    // useHash: false => PathLocationStrategy used (https:// angular.io/api/common/PathLocationStrategy)
    // location.go('/foo') => url becomes example.com/my/app/base/href/foo (APP_BASE_HREF must be provided)

    // How APP_BASE_HREF is provided globally:
    /* @NgModule({
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app/base/href'}]
    }) */

    // individually using href
    /* <a mat-list-item href="#" routerLink="/dashboard" (click)="drawer.toggle()">Dashboard</a> */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
