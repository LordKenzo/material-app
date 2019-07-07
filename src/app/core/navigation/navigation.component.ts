import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lf-navigation',
  template: `
    <mat-toolbar>
      <span class="fill-remaining-space"></span>
      <span>Hello Angular</span>
      <span class="fill-remaining-space"></span>
      <span>
        <a routerLink="/home">Home</a>
      </span>
      <span>
        <a routerLink="/employees">Employees</a>
      </span>
    </mat-toolbar>
  `,
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
