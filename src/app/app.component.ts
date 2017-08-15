/**
 * app.component.ts
 */

import { DomSanitizer } from '@angular/platform-browser';
import { Component, ViewEncapsulation } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as util from './app.util';

@Component({
  selector: 'mbo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mbo';

  constructor(
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer
  ) {
    const iconBasePath = '/assets/icons';

    util.declareIcons(iconRegistry, sanitizer, iconBasePath);
  }
}
