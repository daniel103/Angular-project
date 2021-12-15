import { Component, OnInit } from '@angular/core';
import { Employee } from '../employte';
//import { EMPLOYEES } from '../list-employes';
import { EmployeeService } from '../employee.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-daniel',
  templateUrl: './daniel.component.html',
  styleUrls: ['./daniel.component.css']
})
export class DanielComponent implements OnInit {

  employees: Employee[] = [];

  selectedEmployee?: Employee;

onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
  this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
}

constructor(private employeeService: EmployeeService, private messageService: MessagesService) {}
  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }
  ngOnInit(): void {
    this.getEmployees();
  }
}