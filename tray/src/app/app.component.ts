import { Component, ElementRef, Host, OnInit, Renderer2 } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getTheme } from "./store/results/actions/results.actions";
import { ResultsState } from "./store/results/reducers/results.reducer";
import { selectorGetTheme } from "./store/results/selectors/results.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Panorama Leaderboard";
  darkTheme!: boolean;

  constructor(
    private resultsStore: Store<ResultsState>,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.resultsStore.dispatch(getTheme());
    this.resultsStore.pipe(select(selectorGetTheme))
      .subscribe(darkTheme => this.darkTheme = darkTheme);

    this.setCssVariables();
    
    
    console.log(getComputedStyle(document.documentElement)
      .getPropertyValue("--container-primary-color"));
    
  }

  private setCssVariables() {
    if(this.darkTheme) {
      this.renderer.addClass(this.elementRef.nativeElement, "dark");
      this.renderer.removeClass(this.elementRef.nativeElement, "light");
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, "light");
      this.renderer.removeClass(this.elementRef.nativeElement, "dark");
    }
  }
  
}
