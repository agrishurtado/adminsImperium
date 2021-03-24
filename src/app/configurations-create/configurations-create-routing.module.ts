import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationsCreatePage } from './configurations-create.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsCreatePageRoutingModule {}
