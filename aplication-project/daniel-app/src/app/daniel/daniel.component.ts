import { Component, OnInit } from '@angular/core';
import { Employee } from '../employte';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.css']
})
export class DanielComponent implements OnInit {

  employee: Employee = {

  id: 256486214,
  
  fname: 'alex',
  
  lname: 'daniel',
}


employee1: Employee = {

  id: 256486214,
  
  fname: 'alex',
  
  lname: 'daniel',
}
  constructor() { }

  ngOnInit(): void {
  }

}
