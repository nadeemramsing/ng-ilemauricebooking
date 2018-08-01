import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import * as _ from 'lodash';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;

  public menu = MENU_ITEMS;

  constructor(
    @Inject(DOCUMENT) private document,

    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageScrollService: PageScrollService
  ) { }

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
    const scrollTarget = '#' + _.last(url.split('/'));

    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document,
      scrollTarget,
      scrollingViews: [this.container.nativeElement]
    });
    this.pageScrollService.start(pageScrollInstance);
  }
}
