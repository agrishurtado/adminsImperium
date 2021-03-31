import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceAuthorizeMenuPageRoutingModule } from './balance-authorize-menu-routing.module';

import { BalanceAuthorizeMenuPage } from './balance-authorize-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceAuthorizeMenuPageRoutingModule
  ],
  declarations: [BalanceAuthorizeMenuPage]
})
export class BalanceAuthorizeMenuPageModule {}
