import { Component, OnInit } from '@angular/core';
import { DebtService } from "./debt.service";
import { Debt } from '../debt.type';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit
{
  constructor(private debtService:DebtService) { }

  debts:Array<Debt>;
	showDetail:boolean=false;
	detailDebt:Debt;

	ngOnInit(): void
	{
		this.debtService.getDebts().toPromise().then((debts)=>{
			this.debts = debts;
		}).catch((err)=>{
			console.error("[debt.component.ts] Error: ", err);
		});
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