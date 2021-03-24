import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationPerformedPage } from './reservation-performed.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationPerformedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPerformedPageRoutingModule {}
