import { TestBed } from '@angular/core/testing';

import { CustomRadioInputService } from './custom-radio-input.service';

describe('CustomRadioInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomRadioInputService = TestBed.get(CustomRadioInputService);
    expect(service).toBeTruthy();
  });
});
