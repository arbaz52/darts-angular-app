import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-add-suspect',
  templateUrl: './add-suspect.component.html',
  styleUrls: ['./add-suspect.component.css']
})
export class AddSuspectComponent implements OnInit {
  suspect: {
    fullName: string,
    gender: string,
    tags: any,
  } = {
      fullName: "",
      gender: "",
      tags: ""
    }
  constructor(private authoritativeService: AuthoritativeService, private router: Router, private toaster: ToasterService) { }

  ngOnInit() {
  }

  addSuspect = () => {
    this.suspect.tags = this.suspect.tags.split(",")
    this.authoritativeService.addSuspect(this.suspect).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ) {
          this.toaster.succ(data.succ.message)
          this.router.navigate(["authoritative/suspects/" + data.suspect._id])
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }
}