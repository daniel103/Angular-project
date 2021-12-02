import { Component, OnInit } from '@angular/core';
import { btnIcon } from '../list-icon';

@Component({
  selector: 'app-fooer',
  templateUrl: './fooer.component.html',
  styleUrls: ['./fooer.component.css']
})
export class FooerComponent implements OnInit {

  btnicons = btnIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
