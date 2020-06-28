import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-chipper',
  templateUrl: './chipper.component.html',
  styleUrls: ['./chipper.component.css']
})
export class ChipperComponent implements OnInit {

  @Output() change = new EventEmitter<string[]>();
  @Input() items: string[];


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.items.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.generateOutput()
  }

  generateOutput = () => {
    console.log("Generating output")
    this.change.emit(this.items);
  }

  remove(item: string): void {
    const index = this.items.indexOf(item);
    console.log(this.items, index, item)
    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.generateOutput()
  }
  constructor() { }

  ngOnInit() {
  }

}
