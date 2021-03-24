import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPerformedPageRoutingModule } from './reservation-performed-routing.module';

import { ReservationPerformedPage } from './reservation-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPerformedPageRoutingModule
  ],
  declarations: [ReservationPerformedPage]
})
export class ReservationPerformedPageModule {}
