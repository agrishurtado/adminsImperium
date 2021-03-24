import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesCreatePageRoutingModule } from './acces-create-routing.module';

import { AccesCreatePage } from './acces-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesCreatePageRoutingModule
  ],
  declarations: [AccesCreatePage]
})
export class AccesCreatePageModule {}
