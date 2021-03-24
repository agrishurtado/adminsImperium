import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationsPasswordPageRoutingModule } from './configurations-password-routing.module';

import { ConfigurationsPasswordPage } from './configurations-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationsPasswordPageRoutingModule
  ],
  declarations: [ConfigurationsPasswordPage]
})
export class ConfigurationsPasswordPageModule {}
