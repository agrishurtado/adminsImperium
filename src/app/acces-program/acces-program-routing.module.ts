import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesProgramPage } from './acces-program.page';

const routes: Routes = [
  {
    path: '',
    component: AccesProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesProgramPageRoutingModule {}
