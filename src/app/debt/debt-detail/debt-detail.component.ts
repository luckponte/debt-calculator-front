import { Component, OnInit, Input } from '@angular/core';
import { Debt } from '../../debt.type';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.css']
})
export class DebtDetailComponent implements OnInit {
  constructor() { }

  @Input() debt:any;

  ngOnInit(): void {
  }

}
