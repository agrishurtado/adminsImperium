import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciesSiniestrosPage } from './emergencies-siniestros.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesSiniestrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenciesSiniestrosPageRoutingModule {}
