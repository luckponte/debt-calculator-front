import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'divida',
	loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule)
},{
  path: '',
  loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule)
},{
  path: 'config',
  loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }