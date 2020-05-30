import { TestBed } from '@angular/core/testing';

import { AuthoritativeService } from './authoritative.service';

describe('AuthoritativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthoritativeService = TestBed.get(AuthoritativeService);
    expect(service).toBeTruthy();
  });
});
