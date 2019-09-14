import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // Note:  All services need manually registered in app.module.ts
  // Note: HttpClient also needs imported in app.module.ts
  private finaldata = [];
  private apiurl = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl);
  }
}
