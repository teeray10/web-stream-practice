import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStandings from "../reducers/standings.reducer";

export const standingsState = createFeatureSelector<fromStandings.StandingsState>(
  fromStandings.standingsFeatureKey
);

export const selectorGetStandings = createSelector(
  standingsState,
  (state: fromStandings.StandingsState) => state.teams
)