import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _title: Title) { }

  ngOnInit() {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => this._route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event) => {
      let title = 'Hiep Nguyen - '
      if (event['title']) {
        title += event['title'];
      }
      this._title.setTitle(title);
    })
  }
}
