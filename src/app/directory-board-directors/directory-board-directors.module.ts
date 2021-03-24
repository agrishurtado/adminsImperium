import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoryBoardDirectorsPageRoutingModule } from './directory-board-directors-routing.module';

import { DirectoryBoardDirectorsPage } from './directory-board-directors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoryBoardDirectorsPageRoutingModule
  ],
  declarations: [DirectoryBoardDirectorsPage]
})
export class DirectoryBoardDirectorsPageModule {}
