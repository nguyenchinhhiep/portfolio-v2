import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAuthComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__auth';
  constructor() { }

  ngOnInit(): void {
  }

}
