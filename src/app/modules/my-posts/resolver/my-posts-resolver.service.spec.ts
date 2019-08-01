import { TestBed } from '@angular/core/testing';

import { MyPostsResolverService } from './my-posts-resolver.service';

describe('MyPostsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPostsResolverService = TestBed.get(MyPostsResolverService);
    expect(service).toBeTruthy();
  });
});
