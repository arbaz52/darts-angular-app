import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';

@Component({
  selector: 'app-authoritative-home',
  templateUrl: './authoritative-home.component.html',
  styleUrls: ['./authoritative-home.component.css']
})
export class AuthoritativeHomeComponent implements OnInit {
  suspects = []

  constructor(private authoritativeService: AuthoritativeService) { }

  ngOnInit() {
    
    this.authoritativeService.getSuspects().subscribe(
      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspects = data.suspects
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )


    
  }

}
