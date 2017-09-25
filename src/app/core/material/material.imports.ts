import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdListModule,
  MdToolbarModule,
} from '@angular/material';
import { Type } from '@angular/core';

export const materialComponents: Type<any>[] = [
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdListModule,
  MdIconModule
];
