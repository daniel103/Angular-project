import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DanielComponent } from './daniel/daniel.component';
import { FormsModule } from '@angular/forms';
import { FooerComponent } from './fooer/fooer.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DanielComponent,
    FooerComponent,
    EmployeeDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
