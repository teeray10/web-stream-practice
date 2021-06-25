import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPortalRoutingModule } from "./admin-portal-routing.module";
import { AdminPortalComponent } from "./admin-portal.component";
import { StandingsTabComponent } from "./components/dashboard/standings-tab/standings-tab.component";
import { FixturesTabComponent } from "./components/dashboard/fixtures-tab/fixtures-tab.component";
import { ResultsTabComponent } from "./components/dashboard/results-tab/results-tab.component";
import { SharedModuleModule } from "../shared/shared-modules/shared-tables.module";
import { MatTabsModule } from "@angular/material/tabs";
import { AddResultComponent } from "./components/add-result/add-result.component";
import { AddResultFormComponent } from "./components/add-result/add-result-form/add-result-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    AdminPortalComponent,
    StandingsTabComponent,
    FixturesTabComponent,
    ResultsTabComponent,
    AddResultComponent,
    AddResultFormComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
})
export class AdminPortalModule {}
