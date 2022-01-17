import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CounterComponent } from '../counter/counter.component';
import { ShowEventComponent } from '../show-event/show-event.component';
import { CreateEventComponent } from '../create-event/create-event.component';

const routes: Routes = [
  { path: 'home', component: CounterComponent },
  { path: 'events', component: EventDetailsComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/eventDetail/:eventId', component: ShowEventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class RoutesModule { }