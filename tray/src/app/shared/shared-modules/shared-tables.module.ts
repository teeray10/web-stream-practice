import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrentStandingsTableComponent } from "../../shared-components/current-standings-table/current-standings-table.component";
import { ResultsTableComponent } from "../../shared-components/results-table/results-table.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [CurrentStandingsTableComponent, ResultsTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [CurrentStandingsTableComponent, ResultsTableComponent],
})
export class SharedModuleModule {}
