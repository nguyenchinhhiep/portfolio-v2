import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './auth.service';
import { EcommerceService } from './ecommerce.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class EcommerceComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce';
  loading: boolean = false;
  constructor(private _ecommerceService: EcommerceService, private _authService: AuthService) { }

  ngOnInit(): void {
    this._ecommerceService.loading$.subscribe(state => {
      this.loading = state;
    })
    this._authService.autoLoginFirebase();
  }

}
