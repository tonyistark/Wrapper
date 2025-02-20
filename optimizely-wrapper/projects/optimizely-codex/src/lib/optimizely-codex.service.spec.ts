import { TestBed } from '@angular/core/testing';

import { OptimizelyCodexService } from './optimizely-codex.service';

describe('OptimizelyCodexService', () => {
  let service: OptimizelyCodexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizelyCodexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
