import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBattleComponent } from './previous-battle.component';

describe('PreviousBattleComponent', () => {
  let component: PreviousBattleComponent;
  let fixture: ComponentFixture<PreviousBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
