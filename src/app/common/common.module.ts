import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonMaterialModule } from './modules/common-material.module';

import { COMMON_COMPONENTS } from './components/export';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonMaterialModule
  ],
  declarations: [
    ...COMMON_COMPONENTS
  ],
  exports: [
    ...COMMON_COMPONENTS,
    CommonMaterialModule
  ]
})
export class CommonModule { }
