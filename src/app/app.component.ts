import { Component } from '@angular/core';
import { WindowRef } from './core/services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private windowRef: WindowRef) {}

  quit(): void {
    this.windowRef.nativeWindow.close();
  }

}
