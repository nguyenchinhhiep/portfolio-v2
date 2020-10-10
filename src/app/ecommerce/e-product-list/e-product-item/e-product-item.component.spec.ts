import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductItemComponent } from './e-product-item.component';

describe('EProductItemComponent', () => {
  let component: EProductItemComponent;
  let fixture: ComponentFixture<EProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
