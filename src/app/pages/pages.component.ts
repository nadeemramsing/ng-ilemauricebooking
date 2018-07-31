import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
    <app-navbar></app-navbar>
    <router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent {
  menu = MENU_ITEMS;
}
