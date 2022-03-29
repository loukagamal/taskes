import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskManagementPageComponent } from './task-management-page/task-management-page.component';

const routes: Routes = [
{ path: '',
    component: HomePageComponent,
   children: [
      {
        path:'management', component: TaskManagementPageComponent
      },]} 
   


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
