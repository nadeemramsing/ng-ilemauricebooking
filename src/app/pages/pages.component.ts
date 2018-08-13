import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, AfterViewInit, Inject, ViewChild, ElementRef, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { TakeUntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import * as _ from 'lodash';

import { MENU_ITEMS } from './pages-menu';

// NON-COMPONENT VARIABLES
const pages = [
  '#home',
  '#about'
];

@TakeUntilDestroy()
@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PagesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('container') container: ElementRef;

  public currentPageIndex: number = 0;
  public lastPageIndex: Number = pages.length - 1;
  public menu = MENU_ITEMS;
  public showArrows = true;

  private mousewheel$: Observable<Event>;

  constructor(
    @Inject(DOCUMENT) private document,

    private activatedRoute: ActivatedRoute,
    private ref: ChangeDetectorRef,
    private router: Router,
    private pageScrollService: PageScrollService
  ) { }

  // LIFECYCLE HOOKS
  ngOnInit() {
    this.mousewheel$ = fromEvent(this.container.nativeElement, 'mousewheel');
    this.mousewheel$
      .pipe(throttleTime(1000))
      .pipe(untilDestroyed(this))
      .subscribe(event => this.onMouseWheel(event));
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(untilDestroyed(this))
      .subscribe(event => event['changeRoute'] && this.onRouteChange(event));
  }

  ngOnDestroy() {
    
  }

  // LISTENERS
  onRouteChange(event) {
    const scrollTarget = getScrollTarget(event);

    this.currentPageIndex = pages.indexOf(scrollTarget);
    this.scroll(scrollTarget);
  }

  onArrowClick(type) {
    switch (type) {
      case 'up': this.scrollPrevious(); break;
      case 'down': this.scrollNext(); break;
    }
  }

  onMouseWheel(event) {
    switch (true) {
      case event.wheelDeltaY > 0 && this.currentPageIndex !== 0: this.scrollPrevious(); break;
      case event.wheelDeltaY < 0 && this.currentPageIndex !== this.lastPageIndex: this.scrollNext(); break;
    }
  }

  onPageScrollFinish() {
    this.showArrows = true;
    this.ref.detectChanges();

    const url = pages[this.currentPageIndex].replace('#', '');
    this.router.navigate([url]);
  }

  // ACTIONS
  scrollPrevious() {
    this.currentPageIndex = Math.max(--this.currentPageIndex, 0);
    this.getScrollTargetAndScroll();
  }

  scrollNext() {
    this.currentPageIndex = Math.min(pages.length - 1, ++this.currentPageIndex);
    this.getScrollTargetAndScroll();
  }

  getScrollTargetAndScroll() {
    const scrollTarget = pages[this.currentPageIndex];
    this.scroll(scrollTarget);
    this.ref.detectChanges();
  }

  scroll(scrollTarget) {
    this.showArrows = false;

    const onPageScrollFinish = new EventEmitter<boolean>();
    onPageScrollFinish.subscribe(() => this.onPageScrollFinish());

    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document,
      scrollTarget,
      scrollingViews: [this.container.nativeElement],
      pageScrollFinishListener: onPageScrollFinish
    });

    this.pageScrollService.start(pageScrollInstance);
  }
}

// NON-COMPONENT HELPER FUNCTIONS
// scroll
function getScrollTarget({ url }) {
  return '#' + _.last(url.split('/'));
}
