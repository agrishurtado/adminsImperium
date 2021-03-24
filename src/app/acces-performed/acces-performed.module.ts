import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesPerformedPageRoutingModule } from './acces-performed-routing.module';

import { AccesPerformedPage } from './acces-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesPerformedPageRoutingModule
  ],
  declarations: [AccesPerformedPage]
})
export class AccesPerformedPageModule {}
