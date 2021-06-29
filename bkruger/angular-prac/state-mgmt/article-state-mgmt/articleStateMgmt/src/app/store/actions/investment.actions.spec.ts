import * as fromInvestment from './investment.actions';

describe('investmentInvestments', () => {
  it('should return an action', () => {
    expect(fromInvestment.investmentInvestments().type).toBe('[Investment] Investment Investments');
  });
});
