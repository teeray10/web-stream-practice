import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as DarkthemeActions from '../../actions/dark-theme/darktheme.actions';


@Injectable()
export class DarkthemeEffects {

  constructor(private actions$: Actions) {}

}
