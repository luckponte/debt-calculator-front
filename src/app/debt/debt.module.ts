import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtComponent } from './debt.component';
import { DebtCardComponent } from './debt-card/debt-card.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { DebtListComponent } from './debt-list/debt-list.component';

@NgModule({
  declarations: [DebtComponent, DebtCardComponent, DebtDetailComponent, DebtListComponent],
  imports: [
    CommonModule
  ]
})
export class DebtModule { }
