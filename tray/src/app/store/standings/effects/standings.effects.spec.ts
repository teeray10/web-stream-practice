import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StandingsEffects } from './standings.effects';

describe('StandingsEffects', () => {
  let actions$: Observable<any>;
  let effects: StandingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StandingsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StandingsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
