import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import * as _ from 'lodash';

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
  public places$: Observable<any>;
  public placeFormControl = new FormControl();

  constructor(
    private mapAPI: MapAPI,
    private ref: ChangeDetectorRef
  ) {
    this.placeFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(v => this.setNewPlaces$(v));
  }

  ngOnInit() {
    this.setNewPlaces$('');
  }

  setNewPlaces$(place: String = '') {
    this.places$ = this.mapAPI
      .getPlaces(place)
      .pipe(map(v => _.chain(v.elements)
        .sortBy('tags.name')
        .sortedUniqBy(v => v.tags.name)
        .value()
      ));

    this.ref.detectChanges();
  }

}
