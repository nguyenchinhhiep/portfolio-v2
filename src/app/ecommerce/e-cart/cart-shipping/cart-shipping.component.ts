import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart-shipping',
  templateUrl: './cart-shipping.component.html',
  styleUrls: ['./cart-shipping.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartShippingComponent implements OnInit {
  @HostBinding('attr.class') classes = 'cart__shipping d-block';
  shippingForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createShippingForm();
  }

  createShippingForm() {
    this.shippingForm = this._fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required]
    })
  }

  onSubmit() {
    this.shippingForm.markAllAsTouched();
    if(!this.shippingForm.valid) return;
    this._router.navigate(['./../payment'], {relativeTo: this._route});
  }

}
