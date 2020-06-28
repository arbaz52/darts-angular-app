import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-authoritative-home',
  templateUrl: './authoritative-home.component.html',
  styleUrls: ['./authoritative-home.component.css']
})
export class AuthoritativeHomeComponent implements OnInit {


  //implementing searching of suspects
  search = {
    suspects: {
      query: "",
      suspects: []
    }
  }
  clearSuspectsSearchQuery = () => {
    this.search.suspects.query = ''
    console.log(this.search)
    this.getSuspects()
  }
  searchForSuspects = () => {
    this.toaster.info("Looking for suspects, please wait!")
    var query = this.search.suspects.query
    if (query == "") {
      this.getSuspects()
      return
    }
    this.authoritativeService.searchSuspects(query).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          this.toaster.succ(data.succ)
          this.search.suspects.suspects = data.suspects

        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }
  getSuspects = () => {

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


  suspects = []

  constructor(private authoritativeService: AuthoritativeService, private toaster: ToasterService) {
  }

  ngOnInit() {
    this.search = {
      suspects: {
        query: "",
        suspects: []
      }
    }
    this.getSuspects()

  }

}
