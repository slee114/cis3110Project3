import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<html>
    <body>
      <app-store-title />
      <router-outlet>
      </router-outlet>
    </body>
  </html>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cis3110project1';
}
