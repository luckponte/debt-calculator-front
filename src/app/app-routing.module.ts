import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: 'divida',
	loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule)
},{
  path: 'config',
  loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule)
},{
  path: '',
  redirectTo: '/divida',
  pathMatch: 'full'
},{
  path: '**',
  redirectTo: '/divida',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }