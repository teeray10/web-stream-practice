import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/model/investment';
import { newInvestment } from 'src/app/store/actions/investment.actions';
import { InvestmentState } from 'src/app/store/reducers/investment.reducer';
import { selectInvestmentState } from 'src/app/store/selectors/investment.selectors';

@Component({
  selector: 'app-investment-create',
  templateUrl: './investment-create.component.html',
  styleUrls: ['./investment-create.component.css']
})
export class InvestmentCreateComponent implements OnInit {
  public investmentForm = new Investment(0, 0, 0)
  investment$?: Observable<Investment>

  constructor(
    private store: Store<InvestmentState>
  ) { }

  ngOnInit(): void {
    this.investment$ = this.store.pipe(select(selectInvestmentState));
  }

  submitInvestment(){
    this.store.dispatch(newInvestment({investment: this.investmentForm}));
  }
}
