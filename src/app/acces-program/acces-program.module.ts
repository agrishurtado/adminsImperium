import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesProgramPageRoutingModule } from './acces-program-routing.module';

import { AccesProgramPage } from './acces-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesProgramPageRoutingModule
  ],
  declarations: [AccesProgramPage]
})
export class AccesProgramPageModule {}
