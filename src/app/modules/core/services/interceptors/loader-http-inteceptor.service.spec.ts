import { TestBed } from '@angular/core/testing';

import { LoaderHttpInteceptorService } from './loader-http-inteceptor.service';

describe('LoaderHttpInteceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderHttpInteceptorService = TestBed.get(LoaderHttpInteceptorService);
    expect(service).toBeTruthy();
  });
});
