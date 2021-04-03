import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenciesRoboPageRoutingModule } from './emergencies-robo-routing.module';

import { EmergenciesRoboPage } from './emergencies-robo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenciesRoboPageRoutingModule
  ],
  declarations: [EmergenciesRoboPage]
})
export class EmergenciesRoboPageModule {}
