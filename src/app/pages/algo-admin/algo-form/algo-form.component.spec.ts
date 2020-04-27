import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoFormComponent } from './algo-form.component';

describe('AlgoFormComponent', () => {
  let component: AlgoFormComponent;
  let fixture: ComponentFixture<AlgoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
