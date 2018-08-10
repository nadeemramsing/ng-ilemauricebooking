import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

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

  constructor(
    private db: AngularFirestore,
    private mapAPI: MapAPI,
    private ref: ChangeDetectorRef
  ) {
    this.placeFormControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(v => this.setNewPlaces$(v));
  }

  ngOnInit() {
    const test$ = this.db.collection('test').valueChanges();
    test$.subscribe(v => console.log(v));
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
