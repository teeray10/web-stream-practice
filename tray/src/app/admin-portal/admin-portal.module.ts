import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPortalRoutingModule } from "./admin-portal-routing.module";
import { SharedModuleModule } from "../shared/shared-modules/shared-tables.module";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";


import { AdminPortalComponent } from "./admin-portal.component";
import { StandingsTabComponent } from "./components/dashboard/standings-tab/standings-tab.component";
import { FixturesTabComponent } from "./components/dashboard/fixtures-tab/fixtures-tab.component";
import { ResultsTabComponent } from "./components/dashboard/results-tab/results-tab.component";
import { AddResultComponent } from "./components/add-result/add-result.component";
import { AddResultFormComponent } from "./components/add-result/reactive-form/add-result-form/add-result-form.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TemplateAddResultFormComponent } from "./components/add-result/template-form/add-result-form/template-add-result-form.component";
import { LoginComponent } from "./components/login/login.component";
@NgModule({
  declarations: [
    AdminPortalComponent,
    StandingsTabComponent,
    FixturesTabComponent,
    ResultsTabComponent,
    AddResultComponent,
    AddResultFormComponent,
    TemplateAddResultFormComponent,
    DashboardComponent,
    LoginComponent,
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
    FormsModule
  ],
})
export class AdminPortalModule {}
