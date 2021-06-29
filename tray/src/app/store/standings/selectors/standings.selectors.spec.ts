import * as fromStandings from '../reducers/standings.reducer';
import { selectStandingsState } from './standings.selectors';

describe('Standings Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStandingsState({
      [fromStandings.standingsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
