import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

import { DebtService } from './debt.service';
import { DebtRoutingModule } from './debt-routing.module';
import { DebtComponent } from './debt.component';
import { DebtCardComponent } from './debt-card/debt-card.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';

@NgModule({
  declarations: [DebtComponent, DebtCardComponent, DebtDetailComponent],
  providers: [DebtService],
  imports: [
    CommonModule,
    DebtRoutingModule,
    HttpClientModule
  ],
  exports:[DebtComponent, DebtCardComponent, DebtDetailComponent],
  bootstrap: [DebtComponent]
})
export class DebtModule { }
