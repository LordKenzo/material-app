import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAction, AngularFireDatabase, AngularFireList, DatabaseSnapshot } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  form: FormGroup;

  employeeListRef: AngularFireList<Employee>;
  employeeList: Observable<Array<Employee>>;

  constructor(private firebase: AngularFireDatabase) {
    this.form = new FormGroup({
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl(0),
      hireDate: new FormControl(),
      isPermanent: new FormControl(false)
    });
  }

  initFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  getEmployees(): Observable<Employee[]> {
    this.employeeListRef = this.firebase.list('employee');
    return this.employeeList = this.employeeListRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ id: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  insertEmployee(employee: Employee) {
    const { $key: id, ...e } = employee;
    this.employeeListRef.push(e);
  }

  updateEmployee(employee: Employee) {
    this.employeeListRef.update(employee.$key, employee);
  }

  deleteEmployee($key: string) {
    this.employeeListRef.remove($key);
  }
}
