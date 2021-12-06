import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employte';
import { EMPLOYEES } from '../list-employes';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.css']
})
export class DanielComponent implements OnInit {

  employees = EMPLOYEES;

  selectedEmployee?: Employee;

onSelect(employee: Employee): void {

this.selectedEmployee = employee;

}

  constructor() { }

  ngOnInit(): void {
  }

}
