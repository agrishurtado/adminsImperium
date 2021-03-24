import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesPerformedPage } from './releases-performed.page';

const routes: Routes = [
  {
    path: '',
    component: ReleasesPerformedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesPerformedPageRoutingModule {}
