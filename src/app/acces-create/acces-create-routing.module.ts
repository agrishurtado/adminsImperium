import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesCreatePage } from './acces-create.page';

const routes: Routes = [
  {
    path: '',
    component: AccesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesCreatePageRoutingModule {}
