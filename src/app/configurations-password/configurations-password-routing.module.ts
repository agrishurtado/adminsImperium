import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationsPasswordPage } from './configurations-password.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsPasswordPageRoutingModule {}
