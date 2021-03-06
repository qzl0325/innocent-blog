import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostmainComponent } from './postmain/postmain.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArchivesComponent } from './archives/archives.component';
import { TagsComponent } from './tags/tags.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PostmainComponent
  },
  {
    path: 'home/:id',
    component: PostmainComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'archives',
    component: ArchivesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'home/post/:id',
    component: PostComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
