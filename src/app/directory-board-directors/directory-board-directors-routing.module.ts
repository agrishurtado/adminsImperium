import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryBoardDirectorsPage } from './directory-board-directors.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoryBoardDirectorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryBoardDirectorsPageRoutingModule {}
