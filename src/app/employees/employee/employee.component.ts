import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../../shared/services/employee.service';
import { DepartmentService } from '../../shared/services/department.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'lf-employee',
  templateUrl: 'employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeSrv: EmployeeService,
              private deptSrv: DepartmentService,
              private notifySrv: NotificationService) { }

  ngOnInit() {
    this.employeeSrv.getEmployees();
  }

  onClear() {
    this.notifySrv.success('Form cleaned succesfully');
    this.resetForm();
  }

  onSubmit() {
    if (this.employeeSrv.form.valid) {
      this.employeeSrv.insertEmployee(this.employeeSrv.form.value);
      this.notifySrv.success('Form sent succesfully');
      this.resetForm();
    }
  }

  private resetForm() {
    this.employeeSrv.form.reset();
    this.employeeSrv.initFormGroup();
  }

}
