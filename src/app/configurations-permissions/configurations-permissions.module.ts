import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationsPermissionsPageRoutingModule } from './configurations-permissions-routing.module';

import { ConfigurationsPermissionsPage } from './configurations-permissions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationsPermissionsPageRoutingModule
  ],
  declarations: [ConfigurationsPermissionsPage]
})
export class ConfigurationsPermissionsPageModule {}
