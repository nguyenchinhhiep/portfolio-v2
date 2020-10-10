import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-cart',
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ECartComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__cart mt-4 d-block';
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
