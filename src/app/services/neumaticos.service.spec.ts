import { TestBed } from '@angular/core/testing';

import { NeumaticosService } from './neumaticos.service';

describe('NeumaticosService', () => {
  let service: NeumaticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeumaticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
