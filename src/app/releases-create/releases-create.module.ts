import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReleasesCreatePageRoutingModule } from './releases-create-routing.module';

import { ReleasesCreatePage } from './releases-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReleasesCreatePageRoutingModule
  ],
  declarations: [ReleasesCreatePage]
})
export class ReleasesCreatePageModule {}
