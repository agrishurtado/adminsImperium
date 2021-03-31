import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceAuthorizePage } from './balance-authorize.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceAuthorizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceAuthorizePageRoutingModule {}
