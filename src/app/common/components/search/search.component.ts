import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import * as _ from 'lodash';

import { MapAPI } from './../../services/api/map.api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  public places$: Observable<any>;
  public placeFormControl = new FormControl();

  private selectedPlace;

  constructor(
    private mapAPI: MapAPI,
    private ref: ChangeDetectorRef
  ) {
    this.placeFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(v => v !== this.selectedPlace && this.setNewPlaces$(v));
  }

  ngOnInit() {

  }

  setNewPlaces$(place: String = '') {
    this.places$ = this.mapAPI
      .getPlaces(place)
      .pipe(map(v => _.chain(v.elements)
        .sortBy('tags.name')
        .sortedUniqBy(element => element.tags.name)
        .thru(elements => elements.length ? elements : [{ tags: { name: `No "${place}" found.` }, notFound: true }])
        .value()
      ));

    this.ref.detectChanges();
  }

  optionSelected($event) {
    this.selectedPlace = $event.option.value;
  }

}
