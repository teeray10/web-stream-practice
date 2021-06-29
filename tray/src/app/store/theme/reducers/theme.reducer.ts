import { Action, createReducer, on } from "@ngrx/store";
import * as ThemeActions from "../actions/theme.actions";

export const themeFeatureKey = "theme";

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ThemeActions.loadThemes, state => state),

);

