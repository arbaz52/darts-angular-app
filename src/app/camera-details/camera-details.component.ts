import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css']
})
export class CameraDetailsComponent implements OnInit {
  
 validImg: boolean = true;

  @Input()
  camera: {};
  
  
  constructor() { }

  ngOnInit() {
  }

}
