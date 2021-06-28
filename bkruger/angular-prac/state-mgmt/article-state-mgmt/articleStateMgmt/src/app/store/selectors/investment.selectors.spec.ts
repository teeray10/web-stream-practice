import * as fromInvestment from '../reducers/investment.reducer';
import { selectInvestmentState } from './investment.selectors';

describe('Investment Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInvestmentState({
      [fromInvestment.investmentFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
