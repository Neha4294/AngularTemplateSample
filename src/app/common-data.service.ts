import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  private data: any;
  constructor() { }

  get $Data() {
    return this.data;
  }

  set $Data(data: any) {
    this.data = data;
  }
}
