import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/Basic/home/home.component';
import { PostDashboardComponent } from './shared/component/Post/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/component/Post/post-form/post-form.component';
import { PostDetailsComponent } from './shared/component/Post/post-details/post-details.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }
  ,{
    path :'post',
    component : PostDashboardComponent,
  }
  ,{
    path :'post/addPost',
    component : PostFormComponent
  },
  {
    path : 'post/:id',
    component : PostDetailsComponent
  },
  {
    path : 'post/:id/edit',
    component : PostFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
