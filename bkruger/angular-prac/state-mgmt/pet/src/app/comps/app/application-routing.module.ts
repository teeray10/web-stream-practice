import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './blog/article/article.component';
import { ArticlesComponent } from './blog/articles/articles.component';
import { InvestmentComponent } from './invest/investment/investment/investment.component';
import { InvestmentsComponent } from './invest/investments/investments/investments.component';
import { RiskTakeComponent } from './invest/risk-take/risk-take/risk-take.component';
import { RiskTakesComponent } from './invest/risk-takes/risk-takes/risk-takes.component';
import { ApplicationHomeComponent } from './application-home/application-home.component';
import { InvestmentCreateComponent } from './invest/investment-create/investment-create.component';

const routes: Routes = [
  {
    path: 'app',
    component: ApplicationHomeComponent,
    children: [
      {
        path: 'blog',
        children: [
          { path: 'article/:id', component: ArticleComponent },
          { path: 'articles', component: ArticlesComponent },
        ]
      },
      {
        path: 'invest',
        children: [
          { path: 'investment/:id', component: InvestmentComponent },
          { path: 'investments', component: InvestmentsComponent },
          { path: 'risk-take/:id', component: RiskTakeComponent },
          { path: 'risk-takes', component: RiskTakesComponent },
          { path: 'investment-create', component: InvestmentCreateComponent },
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
