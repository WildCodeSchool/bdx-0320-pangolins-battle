import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBattleComponent } from './create-battle.component';

describe('CreateBattleComponent', () => {
  let component: CreateBattleComponent;
  let fixture: ComponentFixture<CreateBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
