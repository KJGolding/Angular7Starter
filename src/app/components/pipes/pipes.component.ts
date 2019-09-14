import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'Introduction to Pipes in Angular!'; 
  todaydate = new Date(); 
  jsonval = {name:'Jane', age:'25', address:{a1:'Camp Hill', a2:'PA'}}; 
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
    "Sept", "Oct", "Nov", "Dec"]; 

  constructor() { }

  ngOnInit() {
  }

}
