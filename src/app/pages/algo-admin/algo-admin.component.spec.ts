import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoAdminComponent } from './algo-admin.component';

describe('AlgoAdminComponent', () => {
  let component: AlgoAdminComponent;
  let fixture: ComponentFixture<AlgoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
