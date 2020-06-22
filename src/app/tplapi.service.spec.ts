import { TestBed } from '@angular/core/testing';

import { TplapiService } from './tplapi.service';

describe('TplapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TplapiService = TestBed.get(TplapiService);
    expect(service).toBeTruthy();
  });
});
