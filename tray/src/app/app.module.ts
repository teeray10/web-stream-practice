import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducer, StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ThemeChangerComponent } from "./theme-changer/theme-changer.component";

/* State Management */
import { ResultsEffects } from "./store/results/effects/results.effects";
import * as fromResults from "./store/results/reducers/results.reducer";
import * as fromStandings from "./store/standings/reducers/standings.reducer";
import { StandingsEffects } from "./store/standings/effects/standings.effects";
import * as fromTheme from "./store/theme/reducers/theme.reducer";
import { ThemeEffects } from "./store/theme/effects/theme.effects";

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("action", action);
    console.log("state after reducer", reducer(state, action));

    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ThemeChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {metaReducers: [debug]}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromResults.resultsFeatureKey, fromResults.reducer),
    EffectsModule.forFeature([ResultsEffects, StandingsEffects, ThemeEffects, ThemeEffects]),
    StoreModule.forFeature(fromStandings.standingsFeatureKey, fromStandings.reducer),
    StoreModule.forFeature(fromTheme.themeFeatureKey, fromTheme.reducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
