import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import * as _ from 'lodash';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
    <app-navbar></app-navbar>
    <app-home id="home"></app-home>
    <app-about id="about"></app-about>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit, AfterViewInit {
  menu = MENU_ITEMS;

  constructor(
    @Inject(DOCUMENT) private document,

    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageScrollService: PageScrollService
  ) {
    PageScrollConfig.defaultDuration = 400;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.activatedRoute.url.subscribe(() => this.onUrlChange());
    this.router.events.subscribe(event => event instanceof NavigationEnd && this.onRouteChange(event));
  }

  // LISTENERS
  onUrlChange() {
    setTimeout(() => this.scrollController(this.router.routerState.snapshot), 1000);
  }

  onRouteChange(event) {
    this.scrollController(event);
  }

  scrollController({ url }) {
    const scrollTo = '#' + _.last(url.split('/'));
    this.scroll(scrollTo);
  }

  // ACTIONS
  scroll(scrollTo) {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, scrollTo);
    this.pageScrollService.start(pageScrollInstance);
  }
}
