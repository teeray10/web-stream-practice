import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as DarkthemeActions from '../../actions/dark-theme/darktheme.actions';


@Injectable()
export class DarkthemeEffects {


  // loadDarkthemes$ = createEffect(() => {
  //   return this.actions$.pipe( 

  //     ofType(DarkthemeActions.toggleDarkTheme),
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     concatMap(() => EMPTY as Observable<{ type: string }>)
  //   );
  // });

  constructor(private actions$: Actions) {}

}
