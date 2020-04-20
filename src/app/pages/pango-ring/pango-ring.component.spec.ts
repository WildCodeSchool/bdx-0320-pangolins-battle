import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PangoRingComponent } from './pango-ring.component';

describe('PangoRingComponent', () => {
  let component: PangoRingComponent;
  let fixture: ComponentFixture<PangoRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PangoRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PangoRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
