import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderCartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__cart text-secondary';
  constructor() { }

  ngOnInit(): void {
  }

}
