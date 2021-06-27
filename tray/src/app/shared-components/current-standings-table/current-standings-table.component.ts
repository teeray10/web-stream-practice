import { Component, OnInit } from "@angular/core";
import { Team } from "../../models/Team";
import { select, Store } from "@ngrx/store";
import { StandingsState } from "src/app/store/standings/reducers/standings.reducer";
import { getStandings } from "src/app/store/standings/actions/standings.actions";
import { selectorGetStandings } from "src/app/store/standings/selectors/standings.selectors";
import { ResultsState } from "src/app/store/results/reducers/results.reducer";

@Component({
  selector: "app-current-standings-table",
  templateUrl: "./current-standings-table.component.html",
  styleUrls: ["./current-standings-table.component.scss"],
})
export class CurrentStandingsTableComponent implements OnInit {
  displayedColumns: string[] = [
    "Position",
    "Team",
    "Played",
    "Won",
    "Drawn",
    "Lost",
    "GoalDifference",
    "Points",
  ];
  dataSource: Team[] = [];

  constructor(
    private standingsStore: Store<StandingsState>,
    private resultsStore: Store<ResultsState>) {
  }

  ngOnInit(): void {

    this.getStandings();
    
    console.log("Current Standings Table Initialized");
    
  }

  private getStandings() {
    this.standingsStore.dispatch(getStandings());
    this.standingsStore.pipe(select(selectorGetStandings))
      .subscribe(teams => this.dataSource = teams);
  }
}