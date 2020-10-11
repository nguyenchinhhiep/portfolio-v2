import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELoaderComponent } from './e-loader.component';

describe('ELoaderComponent', () => {
  let component: ELoaderComponent;
  let fixture: ComponentFixture<ELoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ELoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
