import { TestBed } from '@angular/core/testing';

import { UpRestService } from './up-rest.service';

describe('UpRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpRestService = TestBed.get(UpRestService);
    expect(service).toBeTruthy();
  });
});
