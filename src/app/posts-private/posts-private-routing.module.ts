import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPrivatePage } from './posts-private.page';

const routes: Routes = [
  {
    path: '',
    component: PostsPrivatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPrivatePageRoutingModule {}
