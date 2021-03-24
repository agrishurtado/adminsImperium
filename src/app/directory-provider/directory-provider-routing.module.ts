import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryProviderPage } from './directory-provider.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoryProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryProviderPageRoutingModule {}
