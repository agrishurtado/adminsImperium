import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoryProviderPageRoutingModule } from './directory-provider-routing.module';

import { DirectoryProviderPage } from './directory-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoryProviderPageRoutingModule
  ],
  declarations: [DirectoryProviderPage]
})
export class DirectoryProviderPageModule {}
