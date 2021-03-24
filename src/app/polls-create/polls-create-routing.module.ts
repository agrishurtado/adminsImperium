import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsCreatePage } from './polls-create.page';

const routes: Routes = [
  {
    path: '',
    component: PollsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PollsCreatePageRoutingModule {}
