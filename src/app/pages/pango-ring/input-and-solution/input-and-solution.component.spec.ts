import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndSolutionComponent } from './input-and-solution.component';

describe('InputAndSolutionComponent', () => {
  let component: InputAndSolutionComponent;
  let fixture: ComponentFixture<InputAndSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAndSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
