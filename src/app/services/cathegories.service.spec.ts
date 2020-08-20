import { TestBed } from '@angular/core/testing';

import { CathegoriesService } from './cathegories.service';

describe('CathegoriesService', () => {
  let service: CathegoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CathegoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
