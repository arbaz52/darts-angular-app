import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-view-server',
  templateUrl: './view-server.component.html',
  styleUrls: ['./view-server.component.css']
})
export class ViewServerComponent implements OnInit {
  server: {
    _id: string,
    longitude: number,
    latitude: number,
    url: string,
    name: string,
    cameras: []
  } = {
      _id: "", longitude: 0, latitude: 0, url: "", name: "", cameras: []
    }

  serverId: string
  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private toaster: ToasterService) { }

  choseThisLocation = (event) => {
    this.server.latitude = event.coords.lat
    this.server.longitude = event.coords.lng
  }
  ngOnInit() {
    this.serverId = this.activatedRoute.snapshot.paramMap.get("serverId")
    this.adminService.getServer(this.serverId).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.server = data.server
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }

  updateServer = () => {
    this.toaster.info("Updating server information")
    this.adminService.updateServer(this.serverId, this.server).subscribe(
      (data: any) => {
        if(data.err){
          this.toaster.err(data.err.message)
        }else if(data.succ){
          this.toaster.succ(data.succ.message)
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }
  deleteServer = () => {
    this.toaster.info("Deleting server")
    this.adminService.deleteServer(this.serverId).subscribe(
      (data: any) => {
        if(data.err){
          this.toaster.err(data.err.message)
        }else if(data.succ){
          this.toaster.succ(data.succ.message)
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
