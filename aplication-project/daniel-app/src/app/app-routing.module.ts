import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanielComponent } from './daniel/daniel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesRoutingComponent } from './employees-routing/employees-routing.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
 { path: '', redirectTo: '/Home', pathMatch: 'full' },
 { path: 'Home', component: DashboardComponent },
 { path: 'employees-routing', component: EmployeesRoutingComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'employess', component: DanielComponent },
 { path: 'detail/:id', component: EmployeeDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
