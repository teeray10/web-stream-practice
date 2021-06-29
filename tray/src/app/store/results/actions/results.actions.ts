import { createAction, props } from "@ngrx/store";
import { Result } from "src/app/models/Result";

export const getResults = createAction(
  "[Results] Get All Results"
);

export const getResultsComplete = createAction(
  "[Results] Get Results Complete",
  props<{ results: Result[] }>()
);

export const getTheme = createAction(
  "[Results] Get Theme"
)

export const setTheme = createAction(
  "[Results] Set Theme",
  props<{ darkTheme: boolean }>()
);

// export const addResult = createAction(
//   "[Results] Add Result",
//   props<Result>()
// );