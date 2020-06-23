import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-view-alert',
  templateUrl: './view-alert.component.html',
  styleUrls: ['./view-alert.component.css']
})
export class ViewAlertComponent implements OnInit {

  constructor(private apService: AuthoritativeService, private activatedRoute: ActivatedRoute, private toaster: ToasterService) { }
  alertId: string = ""
  alert: {} = {}

  ngOnInit() {
    this.alertId = this.activatedRoute.snapshot.paramMap.get("alertId")

    this.apService.getAlert(this.alertId).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.alert = data.alert
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
