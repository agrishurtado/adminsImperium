import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryColonosPage } from './directory-colonos.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoryColonosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryColonosPageRoutingModule {}
