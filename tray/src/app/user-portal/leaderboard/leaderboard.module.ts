import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModuleModule } from "../../shared/shared-modules/shared-tables.module";
import { LeaderboardRoutingModule } from "./leaderboard-routing.module";
import { LeaderboardComponent } from "./leaderboard.component";

@NgModule({
  declarations: [LeaderboardComponent],
  imports: [CommonModule, LeaderboardRoutingModule, SharedModuleModule],
})
export class LeaderboardModule { }
