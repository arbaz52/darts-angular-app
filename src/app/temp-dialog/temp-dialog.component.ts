import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  title: string,
  description: string,
  btnYes: string,
  btnNo: string
}

@Component({
  selector: 'app-temp-dialog',
  templateUrl: './temp-dialog.component.html',
  styleUrls: ['./temp-dialog.component.css']
})
export class TempDialogComponent implements OnInit {

  @Output() yes = new EventEmitter<string>();
  @Output() no = new EventEmitter<string>();


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TempDialogComponent>) { }

  ngOnInit() {
  }
  handleBtnYes = () => {
    console.log("yes")
    this.yes.emit("yes pressed")
  }
  handleBtnNo = () => {
    console.log("no")
    this.no.emit("no pressed")
  }
}
