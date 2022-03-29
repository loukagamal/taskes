import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public firstList: any[] =[];
  public secList: any;
  public lastList: any;
  constructor() {}
}
