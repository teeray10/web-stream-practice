import { Action, createReducer, on } from "@ngrx/store";
import { Team } from "src/app/models/Team";
import * as StandingsActions from "../actions/standings.actions";

export const standingsFeatureKey = "standings";

export interface StandingsState {
  teams: Team[],
  isLoading: boolean,
}

export const initialState: StandingsState = {
  teams: [],
  isLoading: false
};


export const reducer = createReducer(
  initialState,

  on(StandingsActions.getStandings, state => ({ ...state, isLoading: true })),
  on(StandingsActions.getStandingsSuccess, (state, { teams }) => ({...state, teams, isLoading: false })),

);

