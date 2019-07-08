import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lf-root',
  template: `
    <lf-navigation></lf-navigation>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private title: Title) {}

  ngOnInit() {
    this.router.events.pipe(
      tap(e => console.log(e)),
      filter(e => e instanceof NavigationEnd),
    ).subscribe( n => {
      const pageTitle = this.router.routerState.snapshot.root.children[0].data['title'];
      this.title.setTitle(pageTitle || 'Nessun Titolo');
    });
  }
}
