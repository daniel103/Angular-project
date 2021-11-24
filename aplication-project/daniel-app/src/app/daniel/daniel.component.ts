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
  email: 'danl3654321@gmail.com',
  salary: '15,000',
  dateofbirth: '01/10/1999',
}


employee1: Employee = {

  id: 256486214,
  
  fname: 'alex',
  
  lname: 'daniel',

  email: 'alex1234@gmail.com',
  salary: '20,000',
  dateofbirth: '01/10/1999',
}
  constructor() { }

  ngOnInit(): void {
  }

}
