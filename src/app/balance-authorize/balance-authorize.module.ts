import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceAuthorizePageRoutingModule } from './balance-authorize-routing.module';

import { BalanceAuthorizePage } from './balance-authorize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceAuthorizePageRoutingModule
  ],
  declarations: [BalanceAuthorizePage]
})
export class BalanceAuthorizePageModule {}
