import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  // binded variables
  isSidenavOpen: boolean = false;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  
  // services goes here
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  // binded methods
  toggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}