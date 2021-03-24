import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketCreatePage } from './market-create.page';

const routes: Routes = [
  {
    path: '',
    component: MarketCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketCreatePageRoutingModule {}
