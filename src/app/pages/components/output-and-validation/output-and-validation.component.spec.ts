import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputAndValidationComponent } from './output-and-validation.component';

describe('OutputAndValidationComponent', () => {
  let component: OutputAndValidationComponent;
  let fixture: ComponentFixture<OutputAndValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputAndValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputAndValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
