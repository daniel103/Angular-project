import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  compProvider: string;
  constructor() {
  this.title = 'Computer Shop';
  this.compProvider = 'Asus';
  }

}
