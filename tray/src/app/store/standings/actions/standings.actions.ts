import { createAction, props } from "@ngrx/store";
import { Team } from "src/app/models/Team";

export const getStandings = createAction(
  "[Standings] Get Standings"
);

export const getStandingsSuccess = createAction(
  "[Standings] Get Standings Success",
  props<{ teams: Team[] }>()
);

export const getStandingsFail = createAction(
  "[Standings] Get Standings Fail",
  props<{ teams: Team[] }>()
);