import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.moudle';
import { AppComponent } from './app.component';
import { ChaildComponent } from './chaild/chaild.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CjhaildBComponent } from './cjhaild-b/cjhaild-b.component';
import { ErrorComponent } from './error/error.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaildComponent,
    TopBarComponent,
    CjhaildBComponent,
    ErrorComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
