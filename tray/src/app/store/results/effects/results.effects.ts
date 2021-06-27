import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { catchError, map, mergeMap } from "rxjs/operators";

import * as ResultsActions from "../actions/results.actions";
import { ResultsService } from "src/app/services/results.service";
import { of } from "rxjs";


@Injectable()
export class ResultsEffects {

  // [Results] Get All Results
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ResultsActions.getResults),
      mergeMap( () =>
        this.resultsService.getResults()
          .pipe(
            map(results => {
              return ResultsActions.getResultsComplete({ results });
            }),
            catchError(() => {
              return of(ResultsActions.getResultsComplete({results: []}));
            })
          )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private resultsService: ResultsService
  ) { }

}
