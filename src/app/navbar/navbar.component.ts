import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  //binded variables
  isNavbarOpen: boolean = false;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  //services goes here
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  //binded methods
  toggle() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }



}
