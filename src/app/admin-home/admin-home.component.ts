import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  //implementing searching of cameras at location
  search = {
    cameras: {
      query: "",
      cameras: [],
      location: null
    }
  }
  clearCamerasSearchQuery = () => {
    this.search.cameras.query=''
    this.search.cameras.location = null

    this.getCameras()
  }
  searchForCamerasAtLocation = () => {
    this.toaster.info("Looking for cameras, please wait!")
    var query = this.search.cameras.query
    if(query == ""){
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

  constructor(private adminService: AdminService, private toaster: ToasterService) { }

  ngOnInit() {
    this.getCameras()


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
