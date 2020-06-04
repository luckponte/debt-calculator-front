import { Component, OnInit, Input } from '@angular/core';
import { Debt } from '../../debt.type';

@Component({
  selector: 'app-debt-card',
  templateUrl: './debt-card.component.html',
  styleUrls: ['./debt-card.component.css']
})
export class DebtCardComponent implements OnInit {

  constructor() { }

  @Input() debt:Debt;

  ngOnInit(): void {
  }

}
