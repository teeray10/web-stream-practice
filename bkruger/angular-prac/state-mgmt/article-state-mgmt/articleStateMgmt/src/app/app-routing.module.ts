import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentCreateComponent } from './comps/invest/investment-create/investment-create/investment-create.component';

const routes: Routes = [
  { path: 'create', component: InvestmentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
