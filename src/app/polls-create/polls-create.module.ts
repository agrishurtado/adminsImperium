import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollsCreatePageRoutingModule } from './polls-create-routing.module';

import { PollsCreatePage } from './polls-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollsCreatePageRoutingModule
  ],
  declarations: [PollsCreatePage]
})
export class PollsCreatePageModule {}
