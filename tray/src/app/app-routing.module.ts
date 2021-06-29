import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemeChangerComponent } from "./theme-changer/theme-changer.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/leaderboard",
    pathMatch: "full",
  },
  {
    path: "leaderboard",
    loadChildren: () =>
      import("./user-portal/leaderboard/leaderboard.module").then(
        (m) => m.LeaderboardModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin-portal/admin-portal.module").then(
        (m) => m.AdminPortalModule
      ),
  },
  {
    path: "theme",
    component: ThemeChangerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
