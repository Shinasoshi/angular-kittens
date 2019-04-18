import { TestBed } from '@angular/core/testing';

import { KittensService } from './kittens.service';

describe('KittensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittensService = TestBed.get(KittensService);
    expect(service).toBeTruthy();
  });
});
