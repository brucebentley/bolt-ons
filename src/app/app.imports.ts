/**
 * app.imports.ts
 */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
// import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';

export const DEV_IMPORTS = [];

export const APP_IMPORTS = [
    AppRoutingModule,
    // SharedModule,
    MaterialModule,
    // FlexLayoutModule,
    BrowserAnimationsModule,
    ...DEV_IMPORTS
];
