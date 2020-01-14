import { TestBed } from '@angular/core/testing';

import { ServicceService } from './servicce.service';

describe('ServicceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicceService = TestBed.get(ServicceService);
    expect(service).toBeTruthy();
  });
});
