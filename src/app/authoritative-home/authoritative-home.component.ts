import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-authoritative-home',
  templateUrl: './authoritative-home.component.html',
  styleUrls: ['./authoritative-home.component.css']
})
export class AuthoritativeHomeComponent implements OnInit {
  currentAP: {} = {}
  canAddAdmins: boolean = false
  canAddAP: boolean = false
  canManageSuspects: boolean = false
  canViewMap: boolean = false
  hasPermission(priv, perm) {
    var can = false;
    priv.forEach(p => {
      can = can || p == perm || p == 'all'
    })
    return can
  }


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

    this.authoritativeService.getCurrentAuthoritative().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.currentAP = data.authoritative
        console.log(this.currentAP)
        this.canAddAdmins = this.hasPermission(data.authoritative.privileges, 'add admins')
        this.canAddAP = this.hasPermission(data.authoritative.privileges, 'add authoritative people')
        this.canManageSuspects = this.hasPermission(data.authoritative.privileges, 'manage suspects')
        this.canViewMap = this.hasPermission(data.authoritative.privileges, 'view map')
        this.nowInit()
      }
    },
      (err) => {
        this.toaster.err(err)
      })




  }
  nowInit(){
    if(this.canManageSuspects){
      this.search = {
        suspects: {
          query: "",
          suspects: []
        }
      }
      this.getSuspects()
    }
  }
}
