import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employte';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() employee?: Employee;
}
