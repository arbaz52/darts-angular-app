import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  servers: any = []
  cameras: any = []

  constructor(private adminService: AdminService, private toaster: ToasterService) { }

  ngOnInit() {

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
