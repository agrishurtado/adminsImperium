import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPublicPage } from './posts-public.page';

const routes: Routes = [
  {
    path: '',
    component: PostsPublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPublicPageRoutingModule {}
