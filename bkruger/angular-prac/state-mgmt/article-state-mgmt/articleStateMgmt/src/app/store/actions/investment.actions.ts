import { createAction, props } from '@ngrx/store';
import { Investment } from 'src/app/model/investment';

export const newInvestment = createAction(
  '[Investment] New Investment',
  props<{ investment: Investment}>()
);




