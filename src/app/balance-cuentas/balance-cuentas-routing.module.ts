import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceCuentasPage } from './balance-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceCuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceCuentasPageRoutingModule {}
