import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationsLogosPageRoutingModule } from './configurations-logos-routing.module';

import { ConfigurationsLogosPage } from './configurations-logos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationsLogosPageRoutingModule
  ],
  declarations: [ConfigurationsLogosPage]
})
export class ConfigurationsLogosPageModule {}
