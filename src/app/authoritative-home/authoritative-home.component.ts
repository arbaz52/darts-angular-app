import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-authoritative-home',
  templateUrl: './authoritative-home.component.html',
  styleUrls: ['./authoritative-home.component.css']
})
export class AuthoritativeHomeComponent implements OnInit {
  suspects = []

  constructor(private authoritativeService: AuthoritativeService, private toaster: ToasterService) { }

  ngOnInit() {
    
    this.authoritativeService.getSuspects().subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspects = data.suspects
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
