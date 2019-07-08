import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'lf-home',
  template: `
    <h1>Welcome to Angular Material</h1>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
