import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CitiesAPI } from './../../common/services/api/cities.api.service';

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
    private citiesAPI: CitiesAPI
  ) { }

  async ngOnInit() {
    const cities = await this.citiesAPI.getPlaces('C').toPromise();
  }

}
