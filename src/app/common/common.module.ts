import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material-module';

import { COMMON_COMPONENTS } from './components/export';

@NgModule({
  /* imports: [
    MaterialModule
  ], */
  declarations: [
    ...COMMON_COMPONENTS
  ],
  exports: [
    ...COMMON_COMPONENTS,
    MaterialModule
  ]
})
export class CommonModule { }
