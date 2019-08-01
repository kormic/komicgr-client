import { TestBed } from '@angular/core/testing';

import { HttpParentService } from './http-parent.service';

describe('HttpParentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpParentService = TestBed.get(HttpParentService);
    expect(service).toBeTruthy();
  });
});
