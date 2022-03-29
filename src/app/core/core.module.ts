import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent,FooterComponent],
  imports: [
    CommonModule,RouterModule

  ],
   exports:[
  NavbarComponent,FooterComponent
  ]
  
})
export class CoreModule { }
