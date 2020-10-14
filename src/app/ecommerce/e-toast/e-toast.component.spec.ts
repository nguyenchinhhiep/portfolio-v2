import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EToastComponent } from './e-toast.component';

describe('EToastComponent', () => {
  let component: EToastComponent;
  let fixture: ComponentFixture<EToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
