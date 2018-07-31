import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import * as _ from 'lodash';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit, AfterViewInit {
  public menu = MENU_ITEMS;

  constructor(
    @Inject(DOCUMENT) private document,

    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageScrollService: PageScrollService
  ) {
    PageScrollConfig.defaultDuration = 400;
  }

  // LIFECYCLE HOOKS
  ngOnInit() { }

  ngAfterViewInit() {
    this.router.events.subscribe(event => event['changeRoute'] && this.onRouteChange(event));
  }

  // LISTENERS
  onRouteChange(event) {
    this.scroll(event);
  }

  // ACTIONS
  scroll({ url }) {
    const scrollTo = '#' + _.last(url.split('/'));

    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
}
