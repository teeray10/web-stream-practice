import * as fromResults from "./results.actions";

describe("resultsResultss", () => {
  it("should return an action", () => {
    expect(fromResults.resultsResultss().type)
      .toBe("[Results] Results Resultss");
  });
});
