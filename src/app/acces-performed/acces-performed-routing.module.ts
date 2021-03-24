import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesPerformedPage } from './acces-performed.page';

const routes: Routes = [
  {
    path: '',
    component: AccesPerformedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesPerformedPageRoutingModule {}
