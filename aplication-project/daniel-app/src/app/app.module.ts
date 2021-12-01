import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DanielComponent } from './daniel/daniel.component';
import { FormsModule } from '@angular/forms';
import { FooerComponent } from './fooer/fooer.component';

@NgModule({
  declarations: [
    AppComponent,
    DanielComponent,
    FooerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
