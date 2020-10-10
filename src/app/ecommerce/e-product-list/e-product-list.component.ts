import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-e-product-list',
  templateUrl: './e-product-list.component.html',
  styleUrls: ['./e-product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductListComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-list mt-4 d-block';
  constructor() { }

  ngOnInit(): void {
  }

}
