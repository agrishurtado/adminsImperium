import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsPerformedPage } from './polls-performed.page';

const routes: Routes = [
  {
    path: '',
    component: PollsPerformedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollsPerformedPageRoutingModule {}
