import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPrivatePageRoutingModule } from './posts-private-routing.module';

import { PostsPrivatePage } from './posts-private.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPrivatePageRoutingModule
  ],
  declarations: [PostsPrivatePage]
})
export class PostsPrivatePageModule {}
