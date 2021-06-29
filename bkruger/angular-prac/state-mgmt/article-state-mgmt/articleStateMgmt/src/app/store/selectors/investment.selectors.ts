import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInvestment from '../reducers/investment.reducer';

export const selectInvestmentState = createFeatureSelector<fromInvestment.InvestmentState>(
  fromInvestment.investmentFeatureKey
);

export const selectInvestment = createSelector(
  selectInvestmentState,
  state => ({state})
);
