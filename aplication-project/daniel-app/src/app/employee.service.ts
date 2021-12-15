import { Injectable } from '@angular/core';
import { Employee } from './employte';
import { EMPLOYEES } from './list-employes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {

    const employees = of(EMPLOYEES);
    this.messageService.add('Employee Service message: all employeeswere updated!');
    return employees;
    }
    constructor(private messageService: MessagesService) { }
}
