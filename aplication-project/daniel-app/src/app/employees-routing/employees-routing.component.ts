import { Component, OnInit } from '@angular/core';
import { Employee } from '../employte';
import { EmployeeService } from '../employee.service';
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employees-routing',
  templateUrl: './employees-routing.component.html',
  styleUrls: ['./employees-routing.component.css']
})

export class EmployeesRoutingComponent implements OnInit {

  //employees = EMPLOYEES;
  employees: Employee[] = [];
  show = 5
  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
  this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
}
  
constructor(
  private route: ActivatedRoute,
  private employeeService: EmployeeService,
  private location: Location,
  private messageService: MessagesService,
) {}


  getEmployees(): void {
     //this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
   .subscribe(employees => this.employees = employees);
    }    

  ngOnInit(): void {
    this.getEmployees();
  }

  add(fname: string): void {
    fname = fname.trim();
    if (!fname) { return; }
    this.employeeService.addEmployee({ fname } as Employee)
    .subscribe(employee => {
    this.employees.push(employee)
    });
  }
  
  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();  
  }
}
