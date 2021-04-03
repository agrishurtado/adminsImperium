import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenciesSiniestrosPageRoutingModule } from './emergencies-siniestros-routing.module';

import { EmergenciesSiniestrosPage } from './emergencies-siniestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenciesSiniestrosPageRoutingModule
  ],
  declarations: [EmergenciesSiniestrosPage]
})
export class EmergenciesSiniestrosPageModule {}
