import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentCreateComponent } from './comps/invest/investment-create/investment-create/investment-create.component';
import { InvestmentsComponent } from './comps/invest/investments/investments/investments.component';

const routes: Routes = [
  { path: 'create', component: InvestmentCreateComponent },
  { path: 'investments', component: InvestmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
