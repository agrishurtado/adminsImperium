import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPublicPageRoutingModule } from './posts-public-routing.module';

import { PostsPublicPage } from './posts-public.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPublicPageRoutingModule
  ],
  declarations: [PostsPublicPage]
})
export class PostsPublicPageModule {}
