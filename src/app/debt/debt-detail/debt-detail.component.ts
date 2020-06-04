import { Component, OnInit, Input } from '@angular/core';
import { Debt } from '../../debt.type';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.css']
})
export class DebtDetailComponent implements OnInit
{
  constructor() { }

  @Input() debt:Debt;

  parcels:Array<Object>; // Parcelas da dívida
  dueDays:number; // Dias atrasados

  ngOnInit(): void
  {
  	this.dueDays = Math.floor((Date.now() - this.debt.deadlineDate)/86400000);

  	if(this.dueDays < 0)
  		this.dueDays = 0;

  	var day = new Date();

  	for (var i = 0; i <= this.debt.maxParcels - 1; i++)
  	{
  		if(!this.parcels)
  			this.parcels = [];

	  	this.parcels[i] = {
  			dueDate: day.setMonth(day.getMonth()+1),
  			value: this.debt.finalValue / this.debt.maxParcels
  		};
  		
  	}

  	console.log('[dept-detail.component.ts] parcels: ',this.parcels);
  }
}
