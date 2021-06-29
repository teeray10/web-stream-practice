import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { concatMap } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";

import * as ThemeActions from "../actions/theme.actions";


@Injectable()
export class ThemeEffects {


  loadThemes$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ThemeActions.loadThemes),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });


  constructor(private actions$: Actions) {}

}
