import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskManagementPageComponent } from './task-management-page/task-management-page.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomePageComponent,
    TaskManagementPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule

  ],
  exports:[
      HomePageComponent,
    TaskManagementPageComponent
  ]
})
export class HomeModule { }
