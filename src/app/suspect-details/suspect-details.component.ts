import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suspect-details',
  templateUrl: './suspect-details.component.html',
  styleUrls: ['./suspect-details.component.css']
})
export class SuspectDetailsComponent implements OnInit {
  @Input() suspect: {}
  
  constructor() { }

  ngOnInit() {
  }

}
