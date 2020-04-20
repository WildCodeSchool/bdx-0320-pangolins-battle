import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBattleComponent } from './next-battle.component';

describe('NextBattleComponent', () => {
  let component: NextBattleComponent;
  let fixture: ComponentFixture<NextBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
