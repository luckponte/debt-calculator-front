import { Component, OnInit } from '@angular/core';
import { Debt } from '../debt.type';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  constructor() { }

  debts:Array<Debt> = [{
  	id: 0,
  	deadlineDate:1591659607000,
  	debtValue:1000,
  	interestValue:20,
  	finalValue:1020,
  	phone:'string',
  	maxParcels:3
  },{
  	id: 1,
  	deadlineDate:1591054807000,
  	debtValue:2000,
  	interestValue:40,
  	finalValue:2040,
  	phone:'string',
  	maxParcels:3
  },{
  	id: 2,
  	deadlineDate:1592264407000,
  	debtValue:3000,
  	interestValue:60,
  	finalValue:3060,
  	phone:'string',
  	maxParcels:3
  }];
	showDetail:boolean=false;
	detailDebt:Debt;

  ngOnInit(): void{
  }

	selectDebt(idx)
	{
		this.detailDebt = this.debts[idx];
		this.showDetail = true;
	}

	deselectDebt()
	{
		this.detailDebt = null;
		this.showDetail = false;
	}
}