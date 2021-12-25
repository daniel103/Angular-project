import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DanielComponent } from './daniel/daniel.component';
import { FormsModule } from '@angular/forms';
import { FooerComponent } from './fooer/fooer.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageEmploysComponent } from './message-employs/message-employs.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DanielComponent,
    FooerComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EmployeesRoutingComponent,
    MessageEmploysComponent,
    EmployeeSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
