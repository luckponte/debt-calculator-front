import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtRoutingModule } from './debt-routing.module';
import { DebtComponent } from './debt.component';
import { DebtCardComponent } from './debt-card/debt-card.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';

@NgModule({
  declarations: [DebtComponent, DebtCardComponent, DebtDetailComponent],
  imports: [
    CommonModule,
    DebtRoutingModule
  ],
  exports:[DebtComponent, DebtCardComponent, DebtDetailComponent],
  bootstrap: [DebtComponent]
})
export class DebtModule { }
