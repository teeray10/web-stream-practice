import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getTheme, setTheme } from "../store/results/actions/results.actions";
import { selectorGetTheme } from "../store/results/selectors/results.selectors";

@Component({
  selector: "app-theme-changer",
  templateUrl: "./theme-changer.component.html",
  styleUrls: ["./theme-changer.component.scss"]
})
export class ThemeChangerComponent implements OnInit {
  darkTheme!: boolean;

  constructor(private resultsStore: Store) { }

  ngOnInit(): void {
    this.resultsStore.dispatch(getTheme());
    this.resultsStore.pipe(select(selectorGetTheme))
      .subscribe(theme => this.darkTheme = theme);
  }

  changeTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.resultsStore.dispatch(setTheme({ darkTheme: this.darkTheme }));
    
  }

}
