import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatMenuModule
    ]
})
export class MaterialModule { }
