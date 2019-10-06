import { TestBed } from '@angular/core/testing';

import { FrameworkConfigService } from './framework-config.service';

describe('FrameworkConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrameworkConfigService = TestBed.get(FrameworkConfigService);
    expect(service).toBeTruthy();
  });
});
