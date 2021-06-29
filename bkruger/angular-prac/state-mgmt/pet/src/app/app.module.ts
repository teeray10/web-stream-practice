import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './comps/app-routing.module';
import { AppComponent } from './comps/app.component';
import { PageNotFoundComponent } from './comps/app/page-not-found/page-not-found.component';
import { ArticlesComponent } from './comps/app/blog/articles/articles.component';
import { ArticleComponent } from './comps/app/blog/article/article.component';
import { InvestmentComponent } from './comps/app/invest/investment/investment/investment.component';
import { RiskTakesComponent } from './comps/app/invest/risk-takes/risk-takes/risk-takes.component';
import { RiskTakeComponent } from './comps/app/invest/risk-take/risk-take/risk-take.component';
import { AdminHomeComponent } from './comps/admin/admin-home/admin-home.component';
import { InvestmentsComponent } from './comps/app/invest/investments/investments/investments.component';
import { AdminRoutingModule } from './comps/admin/admin-routing.module';
import { ApplicationRoutingModule } from './comps/app/application-routing.module';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationHomeComponent } from './comps/app/application-home/application-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkthemeEffects } from './store/effects/dark-theme/darktheme.effects';
import { darkThemeFeatureKey, darkThemeReducer } from './store/reducers/dark-theme/darktheme.reducer';
import { NewArticleEffects } from './store/effects/new-article/new-article.effects';
import { newArticleFeatureKey, newArticleReducer } from './store/reducers/new-article/new-article.reducer';
import { FormsModule } from '@angular/forms';
import { ArticleCreateComponent } from './comps/admin/blog/article-create-new/article-create-new/article-create.component';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log("action", action);
    console.log("state after reducer", reducer(state, action));
    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    ArticleComponent,
    ApplicationHomeComponent,
    AdminHomeComponent,
    InvestmentsComponent,
    InvestmentComponent,
    RiskTakesComponent,
    RiskTakeComponent,
    ArticleCreateComponent,
  ],
  imports: [
    BrowserModule,
    ApplicationRoutingModule,
    AdminRoutingModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers: [ debug ] }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(darkThemeFeatureKey, darkThemeReducer),
    EffectsModule.forFeature([DarkthemeEffects, NewArticleEffects]),
    BrowserAnimationsModule,
    StoreModule.forFeature(newArticleFeatureKey, newArticleReducer),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
