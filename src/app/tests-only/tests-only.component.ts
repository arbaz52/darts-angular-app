import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

import { TempDialogComponent, DialogData } from '../temp-dialog/temp-dialog.component';
import { ToasterService } from '../toaster.service';


@Component({
  selector: 'app-tests-only',
  templateUrl: './tests-only.component.html',
  styleUrls: ['./tests-only.component.css']
})
export class TestsOnlyComponent implements OnInit {
  qrunitName: string = ""
  isLinear: boolean = true;
  open(){
    var d: DialogData = {
      btnNo: "Delete",
      btnYes: "View",
      description: "You selected an image, what you do want to do with it?",
      title: "Image selected!"
    }
    var dia = this.dialog.open(TempDialogComponent, {
      data: d
    })
    dia.componentInstance.no.subscribe(x => {
      this.toaster.err(x)
      dia.close()
    })
    dia.componentInstance.yes.subscribe(x => {
      this.toaster.succ(x)
      dia.close()
    })
  }

  location: {} = {}
  constructor(public dialog: MatDialog, private toaster: ToasterService) { }

  ngOnInit() {
  }
}
