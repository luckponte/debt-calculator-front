import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtComponent } from './debt/debt.component';

const routes: Routes = [{
	path: 'divida', component: DebtComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }