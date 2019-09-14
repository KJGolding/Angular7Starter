import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  private finaldata = [];
  private photoapiurl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.photoapiurl);
  }
}
