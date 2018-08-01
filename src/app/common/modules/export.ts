import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { COMMON_MATERIAL_MODULES } from './common-material';

export const COMMON_MODULES = [
  ...COMMON_MATERIAL_MODULES,
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
]