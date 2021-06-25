import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Investment } from '../investment';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  investment?: Investment;
  investmentForm = this.formBuilder.group({
    amountToProtect: '',
    profitBeforeSell: '',
    percentProfit: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.investment = this.investmentForm.value;
    console.log(this.investment);
  }

}