import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  isSidenavOpen: boolean = false;
  
  constructor() { }
  
  // binded methods
  toggle() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

}