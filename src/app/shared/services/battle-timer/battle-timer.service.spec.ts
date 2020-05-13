import { TestBed } from '@angular/core/testing';

import { BattleTimerService } from './battle-timer.service';

describe('BattleTimerService', () => {
  let service: BattleTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
