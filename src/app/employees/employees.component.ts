import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lf-employees',
  template: `
    <lf-employee></lf-employee>
    <lf-emplyee-list></lf-emplyee-list>
  `,
  styles: []
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
