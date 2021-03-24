import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationsPermissionsPage } from './configurations-permissions.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPermissionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsPermissionsPageRoutingModule {}
