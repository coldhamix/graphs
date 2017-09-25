import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { WindowRef } from './services/window-ref.service';

@NgModule({
  imports: [MaterialModule],
  exports: [MaterialModule],
  providers: [WindowRef]
})
export class CoreModule {}
