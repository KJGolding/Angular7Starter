import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowdateService {
  // Note:  All services need manually registered in app.module.ts
  constructor() { }

  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }
  
}
