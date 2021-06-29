import { Action, createReducer, on } from '@ngrx/store';
import * as InvestmentActions from '../actions/investment.actions';

export const investmentFeatureKey = 'investment';

export interface InvestmentState {
  investmentAmount: number,
  ProfitBeforeSellAllow: number,
  riskTakerProfit: number,
}

export const initialState: InvestmentState = {
  investmentAmount: 0,
  ProfitBeforeSellAllow: 0,
  riskTakerProfit: 0,
};

export const reducer = createReducer(
  initialState,
  on(InvestmentActions.newInvestment, 
    (state, { investment }) => {
      return { ...state, 
        investmentAmount: investment.investmentAmount,
        ProfitBeforeSellAllow: investment.ProfitBeforeSellAllow,
        riskTakerProfit: investment.riskTakerProfit }
    }),
);

