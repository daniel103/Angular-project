import { Component, OnInit } from '@angular/core';
import { Employee } from '../employte';
//import { EMPLOYEES } from '../list-employes';
import { EmployeeService } from '../employee.service';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];

  selectedEmployee?: Employee;

onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
  this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
}

constructor(private employeeService: EmployeeService, private messageService: MessagesService) {}
  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees.slice(0, 4));
  }
  ngOnInit(): void {
    this.getEmployees();
  }
}
