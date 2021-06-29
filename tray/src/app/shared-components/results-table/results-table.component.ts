import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getResults } from "../../store/results/actions/results.actions"
import { ResultsState } from "../../store/results/reducers/results.reducer";
import { selectorGetResults } from "../../store/results/selectors/results.selectors";
import { Result } from "../../models/Result";

@Component({
  selector: "app-results-table",
  templateUrl: "./results-table.component.html",
  styleUrls: ["./results-table.component.scss"],
})
export class ResultsTableComponent implements OnInit {
	displayedColumns: string[] = [
	  "Date",
	  "Time",
	  "Team1",
	  "Team1Goals",
	  "Divider",
	  "Team2Goals",
	  "Team2",
	];

	results$!: Observable<Result[]>;
	dataSource: Result[] = [];

	constructor(private resultsStore: Store<ResultsState>) {}

	ngOnInit(): void {
	  this.resultsStore.dispatch(getResults());
	  this.resultsStore.pipe(select(selectorGetResults))
		  .subscribe(results => {
			  this.dataSource = results;
		  });
	  console.log("Recent Results Table Initialized");
	}
}
