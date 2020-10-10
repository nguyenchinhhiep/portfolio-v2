import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductDetailComponent } from './e-product-detail.component';

describe('EProductDetailComponent', () => {
  let component: EProductDetailComponent;
  let fixture: ComponentFixture<EProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
