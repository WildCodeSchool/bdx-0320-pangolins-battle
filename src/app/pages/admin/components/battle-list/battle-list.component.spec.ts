import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleListComponent } from './battle-list.component';

describe('BattleListComponent', () => {
  let component: BattleListComponent;
  let fixture: ComponentFixture<BattleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
