import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e-product-item',
  templateUrl: './e-product-item.component.html',
  styleUrls: ['./e-product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EProductItemComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__product-item d-block border p-3 pb-4 rounded';
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onGoToDetail() {
    this._router.navigate(['/ecommerce/detail/1'])
  }

  onAddToCart() {
    console.log('Added to cart!');
  }

}
