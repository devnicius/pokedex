import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="page__container">
    <app-card class=""></app-card>
  <div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';
}
