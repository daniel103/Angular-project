import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { EventService } from '../event.service'


@Component({
  selector: 'app-show-event-component',
  templateUrl: './show-event-component.component.html',
  styleUrls: ['./show-event-component.component.css']
})
export class ShowEventComponentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) { }

  event:any
  status=true

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['eventId'])
  }   

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
  
  goBack(): void {
    this.location.back();
    }
}
