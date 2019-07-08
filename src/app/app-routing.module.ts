import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'My HOMMME!!!'}},
  { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
