import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <navbar-component></navbar-component>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: String = 'Ile Maurice Booking';
}
