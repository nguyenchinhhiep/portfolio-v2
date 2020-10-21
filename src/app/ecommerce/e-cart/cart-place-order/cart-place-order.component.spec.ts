import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlaceOrderComponent } from './cart-place-order.component';

describe('CartPlaceOrderComponent', () => {
  let component: CartPlaceOrderComponent;
  let fixture: ComponentFixture<CartPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPlaceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
