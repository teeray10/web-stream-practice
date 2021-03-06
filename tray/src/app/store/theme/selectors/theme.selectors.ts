import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTheme from "../reducers/theme.reducer";

export const selectThemeState = createFeatureSelector<fromTheme.ThemeState>(
  fromTheme.themeFeatureKey
);
