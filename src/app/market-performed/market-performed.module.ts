import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketPerformedPageRoutingModule } from './market-performed-routing.module';

import { MarketPerformedPage } from './market-performed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketPerformedPageRoutingModule
  ],
  declarations: [MarketPerformedPage]
})
export class MarketPerformedPageModule {}
