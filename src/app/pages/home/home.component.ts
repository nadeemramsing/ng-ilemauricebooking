import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MapAPI } from '../../common/services/api/map.api.service';

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

  constructor(
    private mapAPI: MapAPI
  ) { }

  async ngOnInit() {
    const test = await this.mapAPI.getPlaces('C').toPromise();
  }

}
