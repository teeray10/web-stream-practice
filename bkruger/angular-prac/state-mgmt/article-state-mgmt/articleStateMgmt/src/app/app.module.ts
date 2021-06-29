import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentCreateComponent } from './comps/invest/investment-create/investment-create/investment-create.component';
import { InvestmentsComponent } from './comps/invest/investments/investments/investments.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromInvestment from './store/reducers/investment.reducer';
import { InvestmentEffects } from './store/effects/investment.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentCreateComponent,
    InvestmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(fromInvestment.investmentFeatureKey, fromInvestment.reducer),
    EffectsModule.forFeature([InvestmentEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
