import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class EcommerceComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce';
  constructor() { }

  ngOnInit(): void {
  }

}
