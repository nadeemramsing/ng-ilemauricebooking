import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './../pages.component.scss',
    './home.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public stateCtrl = new FormControl();

  constructor() { }

  ngOnInit() { }

}
