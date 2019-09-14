import { Component, OnInit } from '@angular/core';
import { ShowdateService } from './../../services/showdate/showdate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todaydate;
  constructor(private dateservice: ShowdateService) { }

  ngOnInit() {
    this.todaydate = this.dateservice.showTodayDate();
  }

}
