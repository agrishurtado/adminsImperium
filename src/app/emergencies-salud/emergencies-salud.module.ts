import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenciesSaludPageRoutingModule } from './emergencies-salud-routing.module';

import { EmergenciesSaludPage } from './emergencies-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenciesSaludPageRoutingModule
  ],
  declarations: [EmergenciesSaludPage]
})
export class EmergenciesSaludPageModule {}
