import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoryColonosPageRoutingModule } from './directory-colonos-routing.module';

import { DirectoryColonosPage } from './directory-colonos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoryColonosPageRoutingModule
  ],
  declarations: [DirectoryColonosPage]
})
export class DirectoryColonosPageModule {}
