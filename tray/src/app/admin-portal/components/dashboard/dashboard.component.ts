import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export interface Tabs {
  label: string;
  route: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  tabs: Tabs[] = [
    {
      label: "Standings",
      route: "standings",
    },
    {
      label: "Fixtures",
      route: "fixtures",
    },
    {
      label: "Results",
      route: "results",
    },
  ];

  league: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.league = this.route.snapshot.paramMap.get("league") || "";
  }
}
