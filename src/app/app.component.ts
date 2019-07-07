import { Component } from '@angular/core';

@Component({
  selector: 'lf-root',
  template: `
    <lf-navigation></lf-navigation>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'material-app';
}
