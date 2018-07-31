import { NgModule } from '@angular/core';

//Modules
import { PagesRoutingModule, PAGES_COMPONENTS } from './pages-routing.module';
import { CommonModules } from '../common/common.module';

@NgModule({
  imports: [
    CommonModules,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule { }
