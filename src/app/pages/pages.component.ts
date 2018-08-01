import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import * as _ from 'lodash';

import { MENU_ITEMS } from './pages-menu';

// NON-COMPONENT VARIABLES
const pages = [
  '#home',
  '#about'
];

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit, AfterViewInit {
  @ViewChild('container') container: ElementRef;

  public currentPageIndex: number = 0;
  public lastPageIndex: Number = pages.length - 1;
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
    const scrollTarget = getScrollTarget(event);
    this.scroll(scrollTarget);
  }

  onArrowClick(type) {
    switch(type) {
      case 'up': this.currentPageIndex = Math.max(--this.currentPageIndex, 0); break;
      case 'down': this.currentPageIndex = Math.min(pages.length - 1, ++this.currentPageIndex); break;
    }

    const scrollTarget = pages[this.currentPageIndex];
    this.scroll(scrollTarget);
  }

  // ACTIONS
  scroll(scrollTarget) {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document,
      scrollTarget,
      scrollingViews: [this.container.nativeElement]
    });
    this.pageScrollService.start(pageScrollInstance);
  }
}

// NON-COMPONENT HELPER FUNCTIONS
// scroll
function getScrollTarget({ url }) {
  return '#' + _.last(url.split('/'));
}
