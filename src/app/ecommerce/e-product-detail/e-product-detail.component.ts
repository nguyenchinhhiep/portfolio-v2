import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-product-detail',
  templateUrl: './e-product-detail.component.html',
  styleUrls: ['./e-product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductDetailComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-detail d-block mt-4';
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(){
    
  }

}
