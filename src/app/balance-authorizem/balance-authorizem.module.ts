import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceAuthorizemPageRoutingModule } from './balance-authorizem-routing.module';

import { BalanceAuthorizemPage } from './balance-authorizem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceAuthorizemPageRoutingModule
  ],
  declarations: [BalanceAuthorizemPage]
})
export class BalanceAuthorizemPageModule {}
