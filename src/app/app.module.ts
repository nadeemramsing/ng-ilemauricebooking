// modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

// user-defined
import { PagesModule } from './pages/pages.module';

// components
import { AppComponent } from './app.component';

// routing
import { routes } from './app-routing.module';

// config
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFirestoreModule,
    
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    
    // user-defined
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
