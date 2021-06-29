import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromResults from "../reducers/results.reducer";

export const resultsState = createFeatureSelector<fromResults.ResultsState>(
  fromResults.resultsFeatureKey
);

export const selectorGetResults = createSelector(
  resultsState,
  (state: fromResults.ResultsState) => state.results
);

export const selectorGetTheme = createSelector(
  resultsState,
  (state: fromResults.ResultsState) => state.darkTheme
);
