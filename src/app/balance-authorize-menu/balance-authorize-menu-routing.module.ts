import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceAuthorizeMenuPage } from './balance-authorize-menu.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceAuthorizeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceAuthorizeMenuPageRoutingModule {}
