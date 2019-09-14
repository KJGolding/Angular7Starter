import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic-based',
  templateUrl: './logic-based.component.html',
  styleUrls: ['./logic-based.component.css']
})
export class LogicBasedComponent implements OnInit {
  title = "Logic Based Coding in Angular";
  isavailable = true; // value will be toggled with button click event

  constructor() { }

  ngOnInit() {
  }

  myClickFunction(event) {
    this.isavailable = !this.isavailable;
    alert('Button is clicked'); // alert creates a pop-up box to alert user
    console.log(event); // log details in browser's developer console
  }
}
