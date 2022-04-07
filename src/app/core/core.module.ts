import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,ReactiveFormsModule

  ],
   exports:[
  NavbarComponent,FooterComponent,FormsModule
  ]
  
})
export class CoreModule { }
