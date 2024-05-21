import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="page__container">
    <app-card></app-card>
    <app-input>
  <div>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
}
