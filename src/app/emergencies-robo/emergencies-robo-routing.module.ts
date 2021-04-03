import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciesRoboPage } from './emergencies-robo.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesRoboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenciesRoboPageRoutingModule {}
