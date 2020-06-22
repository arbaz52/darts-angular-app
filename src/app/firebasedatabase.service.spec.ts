import { TestBed } from '@angular/core/testing';

import { FirebasedatabaseService } from './firebasedatabase.service';

describe('FirebasedatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasedatabaseService = TestBed.get(FirebasedatabaseService);
    expect(service).toBeTruthy();
  });
});
