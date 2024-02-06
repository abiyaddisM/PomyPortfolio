import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {
  state:boolean=false;
  counter=0;

  constructor() {}
}
