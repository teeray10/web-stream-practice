import { Action, createReducer, on } from "@ngrx/store";
import * as ThemeActions from "../actions/theme.actions";

export const themeFeatureKey = "theme";

export interface ThemeState {
  isDarkThemeEnabled: boolean
}

export const initialState: ThemeState = {
  isDarkThemeEnabled: false
};


export const reducer = createReducer(
  initialState,

  on(ThemeActions.getTheme, state => state),

);

