import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToasterService } from '../toaster.service';
import { FirebasedatabaseService } from '../firebasedatabase.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  currentAdmin: {} = {}
  canManageQRUnits: boolean = false
  canManageCameras: boolean = false
  canManageServers: boolean = false
  hasPermission(priv, perm) {
    var can = false;
    priv.forEach(p => {
      can = can || p == perm || p == 'all'
    })
    return can
  }


  //implementing searching of cameras at location
  search = {
    cameras: {
      query: "",
      cameras: [],
      location: null
    }
  }
  clearCamerasSearchQuery = () => {
    this.search.cameras.query = ''
    this.search.cameras.location = null

    this.getCameras()
  }
  searchForCamerasAtLocation = () => {
    this.toaster.info("Looking for cameras, please wait!")
    var query = this.search.cameras.query
    if (query == "") {
      this.getCameras()
      return
    }
    this.adminService.searchCamerasAtLocation(query).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          this.toaster.succ(data.succ)
          this.search.cameras.cameras = data.cameras
          this.search.cameras.location = data.location

        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }


  servers: any = []
  cameras: any = []

  constructor(private adminService: AdminService, private toaster: ToasterService, private fdService: FirebasedatabaseService) { }

  ngOnInit() {

    this.adminService.getCurrentAdmin().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.currentAdmin = data.admin
        console.log(this.currentAdmin)
        this.canManageQRUnits = this.hasPermission(data.admin.privileges, 'manage qrunits')
        this.canManageCameras = this.hasPermission(data.admin.privileges, 'manage cameras')
        this.canManageServers = this.hasPermission(data.admin.privileges, 'manage servers')
        console.log(this.canManageCameras, this.canManageQRUnits, this.canManageServers)
        this.nowInit()
      }
    },
      (err) => {
        this.toaster.err(err)
      })




  }

  qrunits=[];
  updateForceLogout = (index, yn) => {
    if (this.qrunits == null)
      return
    if (yn){
      this.toaster.info("Forcing logout!!")
      console.log(this.qrunits[index])
      this.fdService.addForceLogoutEntry(this.qrunits[index]._id).then(d => {
        this.toaster.succ("Action completed!")
      })
    }
    else{
      this.toaster.info("Removing force logout for this qrunit!")
      console.log(this.qrunits[index])
      this.fdService.removeForceLogoutEntry(this.qrunits[index]._id).then(d => {
        this.toaster.succ("Action completed!")
      })
    }
  }
  nowInit = () => {
    if (this.canManageQRUnits) {
      this.adminService.getQRUnits().subscribe(
        (data: any) => {
          if (data.err) {
            this.toaster.err(data.err.message)
          } else if (data.succ || !(data.err)) {
            console.log(data)
            this.qrunits = data.qrunits
            this.qrunits.forEach((qrunit: any) => {
              qrunit.forceLogout = false
            })
            this.fdService.getForceLogouts().subscribe(items => {
              if (!items || items == null || items == undefined)
                return

              Object.keys(items).forEach(k => {
                this.qrunits.forEach((qrunit: any) => {
                  if (qrunit._id == k)
                    qrunit.forceLogout = true
                })
              })
            })
          }
        },
        (err: any) => {
          this.toaster.err(err)
        },
        () => {

        }
      )
    }


    if (this.canManageCameras) {

      this.getCameras()

    }


    if (this.canManageServers) {
      this.adminService.getServers().subscribe(
        (data: any) => {
          if (data.err) {
            this.toaster.err(data.err.message)
          } else if (data.succ || !(data.err)) {
            console.log(data)
            this.servers = data.servers
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


  getCameras = () => {

    this.adminService.getCameras().subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.cameras = data.cameras
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
