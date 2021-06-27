import * as fromResults from "../reducers/results.reducer";
import { resultsState } from "./results.selectors";

describe("Results Selectors", () => {
  it("should select the feature state", () => {
    const result = resultsState({
      [fromResults.resultsFeatureKey]: {}
    });

    expect(result)
      .toEqual({});
  });
});
