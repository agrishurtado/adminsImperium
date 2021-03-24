import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReleasesPerformedPageRoutingModule } from './releases-performed-routing.module';

import { ReleasesPerformedPage } from './releases-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReleasesPerformedPageRoutingModule
  ],
  declarations: [ReleasesPerformedPage]
})
export class ReleasesPerformedPageModule {}
