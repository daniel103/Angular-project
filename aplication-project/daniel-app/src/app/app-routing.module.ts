import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanielComponent } from './daniel/daniel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'employees', component: DanielComponent },
 { path: 'dashboard', component: DashboardComponent },
//  {path: 'detail/:id', component: EmployeeDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
