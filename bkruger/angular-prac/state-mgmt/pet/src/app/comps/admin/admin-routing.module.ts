import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ArticleComponent } from '../app/blog/article/article.component';
import { ArticlesComponent } from '../app/blog/articles/articles.component';
import { InvestmentComponent } from '../app/invest/investment/investment/investment.component';
import { InvestmentsComponent } from '../app/invest/investments/investments/investments.component';
import { RiskTakeComponent } from '../app/invest/risk-take/risk-take/risk-take.component';
import { RiskTakesComponent } from '../app/invest/risk-takes/risk-takes/risk-takes.component';
import { ArticleCreateNewComponent } from './blog/article-create-new/article-create-new/article-create-new.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      {
        path: 'blog',
        children: [
          { path: 'article/:id', component: ArticleCreateNewComponent },
          { path: 'create', component: ArticleCreateNewComponent },
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
export class AdminRoutingModule { }
