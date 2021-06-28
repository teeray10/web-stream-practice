import { Component, OnInit } from '@angular/core';
import { InvestmentForm } from 'src/app/model/investmentForm/investmentForm';

@Component({
  selector: 'app-investment-create',
  templateUrl: './investment-create.component.html',
  styleUrls: ['./investment-create.component.css']
})
export class InvestmentCreateComponent implements OnInit {
  investmentForm = new InvestmentForm(0, 0, 0);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
  }
}
