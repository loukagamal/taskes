import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  siteName:string="mySite";
  navs:any=["home","task management"]
  constructor() { }

  ngOnInit(): void {
  }

}
