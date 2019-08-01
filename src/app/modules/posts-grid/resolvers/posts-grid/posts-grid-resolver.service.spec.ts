import { TestBed } from '@angular/core/testing';

import { PostsGridResolverService } from './posts-grid-resolver.service';

describe('PostsGridResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsGridResolverService = TestBed.get(PostsGridResolverService);
    expect(service).toBeTruthy();
  });
});
