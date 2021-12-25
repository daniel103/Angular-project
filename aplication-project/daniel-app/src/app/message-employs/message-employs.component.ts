import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employte';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-message-employs',
  templateUrl: './message-employs.component.html',
  styleUrls: ['./message-employs.component.css']
})
export class MessageEmploysComponent implements OnInit {
  @Input() employee?: Employee;
    constructor(private messageService: MessagesService) { }
  
    onSelect(employee: Employee): void {    
      this.messageService.add(`Your message to ${employee.fname} was sent!`); 
    }
  
    ngOnInit(): void {

    }
}