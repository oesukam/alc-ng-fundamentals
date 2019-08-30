import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template: `
    <h1>Hello world</h1>
    <img src="/assets/images/basic-shield.png" />
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'Title';
}
