import { TestBed } from '@angular/core/testing';

import { BattlesListService } from './battles-list.service';

describe('BattlesListService', () => {
  let service: BattlesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattlesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
