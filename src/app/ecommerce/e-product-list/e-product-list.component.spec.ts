import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProductListComponent } from './e-product-list.component';

describe('EProductListComponent', () => {
  let component: EProductListComponent;
  let fixture: ComponentFixture<EProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
