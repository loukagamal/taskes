import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-management-page',
  templateUrl: './task-management-page.component.html',
  styleUrls: ['./task-management-page.component.scss']
})
export class TaskManagementPageComponent implements OnInit {

  firsList:any[]=[];
  secList:any;
  lastList:any;
  constructor(private data:DataService) { }
value:string='';
  ngOnInit(): void {
    this.getData();
  }
  getData(){
  this.firsList=this.data.firstList;
  this.secList=this.data.secList;
  this.lastList=this.data.lastList;
  }
  setData(object:string){
    this.data.firstList.push(object)
     this.getData();
  }
}
