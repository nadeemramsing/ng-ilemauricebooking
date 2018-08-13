import { NgModule } from '@angular/core';

// Modules
// General
import { CommonModules } from '../common/common.module';
import { ConfigModule } from '../config/config.module';
// Specific
import { NgxPageScrollModule } from 'ngx-page-scroll';

// Config
import { DefaultPageScrollConfig } from '../config/page-scroll/page-scroll.config';

// Components
import { PagesRoutingModule, PAGES_COMPONENTS } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModules,
    ConfigModule,
    NgxPageScrollModule,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule {
  // Config
  constructor(
    private defaultPageScrollConfig: DefaultPageScrollConfig
  ) { }
}
