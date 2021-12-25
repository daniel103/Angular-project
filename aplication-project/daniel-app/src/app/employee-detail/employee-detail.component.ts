import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employte';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
@Input() employee?: Employee;

  employees: Employee[] = [];

  selectedEmployee?: Employee;

onSelect(employee: Employee): void {
  this.selectedEmployee = employee;  
}

constructor(
  private route: ActivatedRoute,
  private employeeService: EmployeeService,
  private location: Location,
  private messageService: MessagesService
) {}

ngOnInit(): void {
  this.getEmployee();  
}

  getEmployee(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.employeeService.getEmployee(id)
  .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }

save(): void {
  if (this.employee) {
  this.employeeService.updateEmployee(this.employee)
  .subscribe(() => this.goBack());
    }
  }
}