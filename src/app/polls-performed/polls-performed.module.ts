import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollsPerformedPageRoutingModule } from './polls-performed-routing.module';

import { PollsPerformedPage } from './polls-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollsPerformedPageRoutingModule
  ],
  declarations: [PollsPerformedPage]
})
export class PollsPerformedPageModule {}
