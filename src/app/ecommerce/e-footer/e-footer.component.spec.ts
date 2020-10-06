import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFooterComponent } from './e-footer.component';

describe('EFooterComponent', () => {
  let component: EFooterComponent;
  let fixture: ComponentFixture<EFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
