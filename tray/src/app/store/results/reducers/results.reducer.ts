import { createReducer, on } from "@ngrx/store";
import { Result } from "src/app/models/Result";
import * as ResultsActions from "../actions/results.actions";

export const resultsFeatureKey = "results";

const localStorageState = JSON.parse(localStorage.getItem("state") || "");

export interface ResultsState {
  results: Result[],
  darkTheme: boolean,
  isLoading: boolean
}

export const initialState: ResultsState = {
  results: [],
  darkTheme: localStorageState.darkTheme,
  isLoading: false
}


export const reducer = createReducer(
  initialState,

  on(ResultsActions.getResults, (state) => ({ ...state, isLoading: true })),
  on(ResultsActions.getResultsComplete, (state, { results }) => {
    const newState = { ...state, results, isLoading: false };
    localStorage.setItem("state", JSON.stringify(newState));
    return newState;
  }),
  on(ResultsActions.getTheme, (state) => (state)),
  on(ResultsActions.setTheme, (state, { darkTheme }) => {
    const newState = { ...state, darkTheme };
    localStorage.setItem("state", JSON.stringify(newState));
    return newState;
  })

);

