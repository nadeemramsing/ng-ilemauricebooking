import { NgModule } from '@angular/core';

import { COMMON_COMPONENTS } from './components/export';

@NgModule({
  declarations: [
    ...COMMON_COMPONENTS
  ],
  exports: [
    ...COMMON_COMPONENTS
  ]
})
export class CommonModule { }
