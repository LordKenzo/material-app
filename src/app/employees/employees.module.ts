import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './emplyee-list/employee-list.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
