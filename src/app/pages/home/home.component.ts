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
export class HomeComponent {
  
}
