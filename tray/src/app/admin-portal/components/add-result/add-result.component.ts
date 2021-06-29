import { Component, OnInit } from "@angular/core";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { AddResultService } from "../../../services/add-result.service";
import { Result } from "../../../models/Result";
import { Team } from "../../../models/Team";
import { select, Store } from "@ngrx/store";
import { StandingsState } from "src/app/store/standings/reducers/standings.reducer";
import { getStandings } from "src/app/store/standings/actions/standings.actions";
import { selectorGetStandings } from "src/app/store/standings/selectors/standings.selectors";

@Component({
  selector: "app-add-result",
  templateUrl: "./add-result.component.html",
  styleUrls: ["./add-result.component.scss"],
})
export class AddResultComponent implements OnInit {
  teams: Team[] = [];

  errorMsg: string = "";

  constructor(
    private addResultService: AddResultService,
    private standingsStore: Store<StandingsState>
  ) {
  }

  ngOnInit(): void {
    this.standingsStore.dispatch(getStandings());
    this.standingsStore.pipe(select(selectorGetStandings))
      .subscribe(
        teams => {
          this.teams = teams;
          console.log(teams);
          
        }
      );
    
  }

  submit(result: Result) {
    const numOfTeamsMatched: number = this.getNumOfTeamsMatched(result);

    if (numOfTeamsMatched === 2) {
      this.addResultService.addResult(result)
        .pipe(
          catchError((error) => {
            console.log("comes here");
            alert(error.message);

            return of([]);
          }),
        )
        .subscribe();
    } else {
      alert(
        "One or more of these teams are not in our database! Please try again.",
      );
    }
    console.log(result);
  }

  private getNumOfTeamsMatched(result: Result) {
    let numOfTeamsMatched: number = 0;
    for (const team of this.teams) {
      if (this.isAMatch(result, team)) {
        numOfTeamsMatched++;
      }
    }
    return numOfTeamsMatched;
  }

  private isAMatch(result: Result, team: Team) {
    const locale = undefined;
    const options = { sensitivity: "accent" };

    return (
      result.team1.localeCompare(team.name, locale, options) === 0
      || result.team2.localeCompare(team.name, locale, options) === 0
    );
  }
}
