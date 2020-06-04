import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Debt } from '../debt.type';
import { DebtRoutingModule } from './debt-routing.module';
import { DebtComponent } from './debt.component';
import { DebtCardComponent } from './debt-card/debt-card.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { DebtListComponent } from './debt-list/debt-list.component';

@NgModule({
  declarations: [DebtComponent, DebtCardComponent, DebtDetailComponent, DebtListComponent],
  imports: [
    CommonModule,
    DebtRoutingModule
  ],
  exports:[DebtComponent, DebtCardComponent, DebtDetailComponent, DebtListComponent],
  bootstrap: [DebtComponent]
})
export class DebtModule { }
