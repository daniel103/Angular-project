import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChaildComponent } from './chaild/chaild.component'
import { CjhaildBComponent} from './cjhaild-b/cjhaild-b.component'
import { ErrorComponent } from './error/error.component'
import { UsersComponent } from './users/users.component'
import { UserComponent } from './users/user/user.component'

const routes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'Chaild-A', component: ChaildComponent },
  { path: 'Chaild-B', component: CjhaildBComponent, children: [
    {path: 'Chaild-B', component: CjhaildBComponent}
  ] },
  { path: 'users', component: UsersComponent},
  { path: 'users/:userId', component: UserComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
