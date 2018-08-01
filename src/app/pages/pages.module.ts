import { NgModule } from '@angular/core';

// Modules
// General
import { CommonModules } from '../common/common.module';
// Specific
import { NgxPageScrollModule } from 'ngx-page-scroll';

// Config
import { DefaultPageScrollConfig } from './../config/page-scroll.config';

// Components
import { PagesRoutingModule, PAGES_COMPONENTS } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModules,
    NgxPageScrollModule,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
  providers: [
    DefaultPageScrollConfig
  ]
})
export class PagesModule {
  // Config
  constructor(
    private defaultPageScrollConfig: DefaultPageScrollConfig
  ) {
    this.defaultPageScrollConfig.setDefaultConfig();
  }
}
