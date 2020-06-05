import { Component, OnInit, Input } from '@angular/core';
import { Debt } from '../../debt.type';

@Component({
  selector: 'app-debt-card',
  templateUrl: './debt-card.component.html',
  styleUrls: ['./debt-card.component.css']
})
export class DebtCardComponent implements OnInit
{
  constructor() { }

  @Input() debt:Debt;
  status:number = 0; //0 = Ok, 1 = Próximo do vencimento, 2 = Atraso

  ngOnInit(): void
  {

  	let today = new Date(),
  		timeDifference = this.debt.deadlineDate - today.getTime();

	if (timeDifference < 0)
		this.status = 2;
	else if(timeDifference < 604800000) //Se está a uma semana de vencer, estado de alerta
		this.status = 1;
  }

  translateStatus(status)
  {
  	let translated = '';

  	switch (status) {
  		case 0:
  			translated = 'Ok'
  			break;
  		case 1:
  			translated = 'Próximo do vencimento'
  			break;
  		case 2:
  			translated = 'Atrasado'
  			break;
  		
  		default:
  			translated = 'Ok'
  			break;
  	}

  	return translated;
  }
}
