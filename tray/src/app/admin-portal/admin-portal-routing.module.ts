import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPortalComponent } from "./admin-portal.component";
import { FixturesTabComponent } from "./components/dashboard/fixtures-tab/fixtures-tab.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ResultsTabComponent } from "./components/dashboard/results-tab/results-tab.component";
import { StandingsTabComponent } from "./components/dashboard/standings-tab/standings-tab.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
	  pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "league",
    component: AdminPortalComponent
  },
  {
    path: "league/:league",
    component: DashboardComponent,
    children: [
      {
        path: "results",
        component: ResultsTabComponent,
      },
      {
        path: "standings",
        component: StandingsTabComponent,
      },
      {
        path: "fixtures",
        component: FixturesTabComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
