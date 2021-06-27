import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
import { Observable, EMPTY, of } from "rxjs";

import * as StandingsActions from "../actions/standings.actions";
import { LeaderboardService } from "src/app/services/leaderboard.service";


@Injectable()
export class StandingsEffects {


  loadStandings$ = createEffect(() => 
    this.actions$.pipe( 

      ofType(StandingsActions.getStandings),

      mergeMap(() =>
        this.leaderboardService.getCurrentStandings()
          .pipe(
            map(teams => {
              return StandingsActions.getStandingsSuccess({ teams });
            }),
            catchError(() => {
              return of(StandingsActions.getStandingsFail({ teams: [] }));
            })
          )
      )
    )
  );


  constructor(private actions$: Actions, private leaderboardService: LeaderboardService) {}

}
