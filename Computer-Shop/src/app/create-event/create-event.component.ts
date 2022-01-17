import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  
  constructor(private eventService:EventService, private router:Router) { }
  date: any;
  name:any;
  time:any;
  street:any;
  city:any;
  country:any;   
  registration = [true,false];
  label = ['new','private','public'];

  ngOnInit(): void {
  }
  
  saveEvent(event:any) {
    this.eventService.saveEvent(event)
    this.router.navigate(['/events'])
  }
  
  cancel() {
    this.router.navigate(['/events'])
  }
}
