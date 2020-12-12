import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'video/:id' , component:VideoComponent},
  {path:'**' , pathMatch:'full' , redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
