import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { EcommerceService } from './ecommerce.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class EcommerceComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce';
  loading: boolean;
  constructor(private _ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this._ecommerceService.loading$.subscribe(state => {
      console.log(state);
      this.loading = state;
    })
  }

}
