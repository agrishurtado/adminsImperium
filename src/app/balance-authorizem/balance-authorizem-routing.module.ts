import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceAuthorizemPage } from './balance-authorizem.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceAuthorizemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceAuthorizemPageRoutingModule {}
