import { Component, OnInit } from '@angular/core';
import { PhotoserviceService } from '../../services/photoservice/photoservice.service';
import { UserdataService } from 'src/app/services/userdata/userdata.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gui-elements',
  templateUrl: './gui-elements.component.html',
  styleUrls: ['./gui-elements.component.css']
})
export class GuiElementsComponent implements OnInit {
  title = 'GUI Elements for Application Development';

  // declared array of months.
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  // @angular/material and @angular/cdk needs
  // to be added as a dependency to use Materials
  // used modules need imported in app.module.ts
  public albumdetails = [];
  public userdetails = [];

  constructor(private photoservice: PhotoserviceService, private userservice: UserdataService) { }

  ngOnInit() {

    // following is for use with virtual scrolling via photoservice
    this.photoservice.getData().subscribe((data) => {
    this.albumdetails = Array.from(Object.keys(data), k => data[k]);
    console.log(this.albumdetails);
    });

    // following is for use with drag & drop via userservice
    this.userservice.getData().subscribe((data) => {
      this.userdetails = Array.from(Object.keys(data), k => data[k]);
      console.log(this.userdetails);
    });
  }

  // following is used for the month dropdown menu
  changemonths(event) {
    alert('Changed month from the Dropdown');
    console.log(event);
 }

 // following is used for drag & drop list
 onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
