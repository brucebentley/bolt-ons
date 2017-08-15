/**
 * app.module.ts
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...APP_IMPORTS
  ],
  providers: [ APP_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
