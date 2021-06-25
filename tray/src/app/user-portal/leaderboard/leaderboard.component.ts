import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getTheme } from "src/app/store/results/actions/results.actions";
import { ResultsState } from "src/app/store/results/reducers/results.reducer";
import { selectorGetTheme } from "src/app/store/results/selectors/results.selectors";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.scss"]
})
export class LeaderboardComponent implements OnInit {
  darkTheme!: boolean;

  constructor(private resultsStore: Store<ResultsState>) { }

  ngOnInit(): void {
    this.resultsStore.dispatch(getTheme());
    this.resultsStore.pipe(select(selectorGetTheme))
      .subscribe(darkTheme => this.darkTheme = darkTheme);
  }

}
