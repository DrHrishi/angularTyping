import { TestBed } from '@angular/core/testing';

import { TypewriterService } from './typewriter.service';

describe('TypewriterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypewriterService = TestBed.get(TypewriterService);
    expect(service).toBeTruthy();
  });
});
