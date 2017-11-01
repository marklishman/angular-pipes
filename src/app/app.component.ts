import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <label>
        Age:
        <input type="text" [(ngModel)]="age">
      </label>
      <h1>{{age | category}}</h1>
    `,
})
export class AppComponent {
  age = 0;
}
