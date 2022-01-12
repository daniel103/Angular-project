import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService:EventService) { }
  //events: any
  ngOnInit(): void {
    //this.events = this.eventService.getEvents() # build each time we enter the component
  }
  status=true  
  events = this.eventService.getEvents()  

  getTitleClass(eventFormat:any) {
    if (eventFormat === 'new') 
      return ['new']
    
    if (eventFormat === 'private')
      return ['private']
    
    if (eventFormat === 'public')
      return ['public']
    
    return ['inProgress']
  }

  getTitleStyle(eventFormat:any) {
    if (eventFormat === 'new') 
      return {color: 'rgb(0, 109, 0)'}
    
    if (eventFormat === 'private')
      return {color: 'red'}

    if (eventFormat === 'public')
      return {color: 'rgb(69, 0, 160)'}
    
    return {color: 'rgb(38, 0, 255)'}
  }
}
