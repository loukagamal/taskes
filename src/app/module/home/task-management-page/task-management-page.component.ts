import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-task-management-page',
  templateUrl: './task-management-page.component.html',
  styleUrls: ['./task-management-page.component.scss']
})
export class TaskManagementPageComponent implements OnInit {

  form:FormGroup=new FormGroup({firstName:new FormControl('')})
  firsList:any[]=[];
  secList:any[]=[];
  lastList:any[]=[];
  constructor(private data:DataService) { }


  ngOnInit(): void {
    this.getData();
  }
  getData(){
  this.firsList=this.data.firstList;
  this.secList=this.data.secList;
  this.lastList=this.data.lastList;
  }
  setData(myText:any){
   console.log("data "+myText)
    
    this.data.firstList.push(myText)
   
    
     this.getData();
  }
  nextdata(nextText:any,index:number ){
    console.log("data next "+nextText)
this.data.secList.push(nextText)
 console.log(" sec next index  "+index)
this.data.firstList.splice(index,1)
  this.getData();
  }
   secnextdata(nextText:any, index:number){
    console.log(" sec next data  "+nextText)
this.data.lastList.push(nextText)
this.data.secList.splice(index,1)
  this.getData();
  }
  secbackdata(backdata:any,index:number){
     console.log("data next "+backdata)
this.data.firstList.push(backdata)
this.data.secList.splice(index,1)
// this.data.secList=this.data.secList.filter((val)=>{
//  if(val!=backdata) 
//  return val
// })

  this.getData();
  }
  lastbackdata(backdata:any ,index:number){
   console.log(" sec next data  "+backdata)
this.data.secList.push(backdata)
this.data.lastList.splice(index,1)
//  this.data.lastList=this.data.lastList.filter((val)=>{
//  if(val!=backdata) 
//  return val
// })
  this.getData();
  
  }
  removedatatske(taskremove:any,index:number){
    this.data.lastList.splice(index,1)
this.getData();
  }
    removedate(taskremove:any,index:number){
    
    this.data.firstList.splice(index,1)
this.getData();
  }
  removedateseclist(taskremove:any,index:number){
        this.data.secList.splice(index,1)
this.getData();
  }
}
