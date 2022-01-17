import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventAddressComponent } from './event-address/event-address.component';
import { CounterComponent } from './counter/counter.component';
import { EventService } from './event.service';
import { RoutesModule } from './routes/routes.module';
import { ShowEventComponent } from './show-event/show-event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventAddressComponent,
    CounterComponent,
    ShowEventComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
