import { TestBed } from '@angular/core/testing';

import { AddPostResolverService } from './add-post-resolver.service';

describe('AddPostResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPostResolverService = TestBed.get(AddPostResolverService);
    expect(service).toBeTruthy();
  });
});
