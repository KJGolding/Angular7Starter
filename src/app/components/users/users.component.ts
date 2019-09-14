import { Component, OnInit } from '@angular/core';
import { UserdataService } from './../../services/userdata/userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userdata = [];

  constructor(private userservice: UserdataService) { }

  ngOnInit() {
    // following is for use of httpclient via userdata service
    this.userservice.getData().subscribe((data) => {
      this.userdata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.userdata);
    });
  }

}
