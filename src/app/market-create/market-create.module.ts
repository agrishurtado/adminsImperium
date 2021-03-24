import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketCreatePageRoutingModule } from './market-create-routing.module';

import { MarketCreatePage } from './market-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketCreatePageRoutingModule
  ],
  declarations: [MarketCreatePage]
})
export class MarketCreatePageModule {}
