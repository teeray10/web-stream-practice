import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/model/investment';
import { InvestmentState } from 'src/app/store/reducers/investment.reducer';
import { selectInvestmentState } from 'src/app/store/selectors/investment.selectors';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {
  investment$?: Observable<Investment>

  constructor(
    private store: Store<InvestmentState>
  ) { }

  ngOnInit(): void {
    this.investment$ = this.store.pipe(select(selectInvestmentState));
  }

}
