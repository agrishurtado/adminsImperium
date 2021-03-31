import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceCuentasPageRoutingModule } from './balance-cuentas-routing.module';

import { BalanceCuentasPage } from './balance-cuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceCuentasPageRoutingModule
  ],
  declarations: [BalanceCuentasPage]
})
export class BalanceCuentasPageModule {}
