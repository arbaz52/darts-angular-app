import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }

  choseThisLocation = (event) => {
    this.server.latitude = event.coords.lat
    this.server.longitude = event.coords.lng
  }
  ngOnInit() {
    this.serverId = this.activatedRoute.snapshot.paramMap.get("serverId")
    this.adminService.getServer(this.serverId).subscribe(

      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.server = data.server
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )
  }

  updateServer = () => {
    this.adminService.updateServer(this.serverId, this.server).subscribe(
      (data: any) => {
        if(data.err){
          alert(data.err.message)
        }else if(data.succ){
          alert(data.succ.message)
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )
  }
  deleteServer = () => {
    this.adminService.deleteServer(this.serverId).subscribe(
      (data: any) => {
        if(data.err){
          alert(data.err.message)
        }else if(data.succ){
          alert(data.succ.message)
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
