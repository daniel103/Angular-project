import {Injectable} from '@angular/core'

@Injectable()
export class EventService {
  EVENTS = [
    {id: 1, name: 'New Asus presentation', date: '3/1/2022', time: '10:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : true, label: 'public'},
    {id: 2, name: 'New Gigabyte motherboard', date: '4/1/2022', time: '11:00', location: {street: '23 Burla St', city: 'Haifa', country: 'Israel'}, registration : false, label: 'private'},
    {id: 3, name: 'AMD experience', date: '1/11/2022', time: '13:00', location: {street: '123 Lilach St', city: 'Tel-Aviv', country: 'Israel'}, registration : true, label: 'new'},
    {id: 4, name: 'Intel experience', date: '1/18/2022', location: {street: '12 Lilach St', city: 'Tel-Aviv', country: 'Israel'}, registration : false},
    {id: 5, name: 'G5 modeling', date: '6/5/2022', time: '9:00', location: {street: '1 Histadrut St', city: 'Ashdod', country: 'Israel'}, registration : true, label: 'public'},
    {id: 6, name: 'G6 new mpdel', date: '1/5/2022', time: '10:00', registration : false, label: 'new'},
    ]
    
  getEvents() {
    return this.EVENTS     
  }

  getEvent(eventId:number) {
    return this.EVENTS.find(event => event.id === eventId)
  }

  saveEvent(event:any) {
    event.id = this.genId(this.EVENTS)
    this.EVENTS.push(event)  
  }

  genId(Events:any): number {
    return Events.length > 0 ? Math.max(...Events.map((EVENTS: { id: number }) => EVENTS.id)) + 1 : 1;
  }
}