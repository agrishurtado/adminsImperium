import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesCreatePage } from './releases-create.page';

const routes: Routes = [
  {
    path: '',
    component: ReleasesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesCreatePageRoutingModule {}
