import { NgModule } from '@angular/core';

// Modules
// General
import { CommonModules } from '../common/common.module';
// Specific
import { NgxPageScrollModule } from 'ngx-page-scroll';

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
  ]
})
export class PagesModule { }
