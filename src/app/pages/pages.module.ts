import { NgModule } from '@angular/core';

//Modules
import { PagesRoutingModule, PAGES_COMPONENTS } from './pages-routing.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule { }
