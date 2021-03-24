import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationsCreatePageRoutingModule } from './configurations-create-routing.module';

import { ConfigurationsCreatePage } from './configurations-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationsCreatePageRoutingModule
  ],
  declarations: [ConfigurationsCreatePage]
})
export class ConfigurationsCreatePageModule {}
