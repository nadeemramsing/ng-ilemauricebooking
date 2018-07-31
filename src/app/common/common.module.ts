import { NgModule } from '@angular/core';

import { COMMON_MODULES } from './modules/export';
import { COMMON_COMPONENTS } from './components/export';

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...COMMON_COMPONENTS
  ],
  exports: [
    ...COMMON_COMPONENTS,
    ...COMMON_MODULES
  ]
})
export class CommonModule { }
