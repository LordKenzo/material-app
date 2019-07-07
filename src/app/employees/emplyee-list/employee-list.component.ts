import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../shared/models/employee';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'lf-emplyee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  listData: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'actions'];

  constructor(private employeeSrv: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeSrv.getEmployees();
    this.employees.subscribe(employees => {
      this.listData = new MatTableDataSource(employees);
    });
  }

}
