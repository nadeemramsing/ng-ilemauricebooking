import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sidenav-component',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isSidenavOpen: boolean = false;
  
  constructor() { }
  
  // binded methods
  toggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}