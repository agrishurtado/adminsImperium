import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciesSaludPage } from './emergencies-salud.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenciesSaludPageRoutingModule {}
