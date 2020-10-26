import { TestBed } from '@angular/core/testing';

import { FetchBlogsService } from './fetch-blogs.service';

describe('FetchBlogsService', () => {
  let service: FetchBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
