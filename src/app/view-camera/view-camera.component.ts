import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-view-camera',
  templateUrl: './view-camera.component.html',
  styleUrls: ['./view-camera.component.css']
})
export class ViewCameraComponent implements OnInit {
  
  videoOrigin: string = 'camera';
  server: any;

  servers = []
  camera: {
    _id: string,
    longitude: number,
    latitude: number,
    url: string,
    serverId: string
  } = {
    _id: "", longitude: 0, latitude: 0, url: "", serverId: ""
  }
  cameraId: string
  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private toaster: ToasterService) { }

  ngOnInit() {
    this.cameraId = this.activatedRoute.snapshot.paramMap.get("cameraId")

    
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

    this.adminService.getCamera(this.cameraId).subscribe(
      
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.camera = data.camera
          if(data.server)
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


  choseThisLocation = (event) => {
    this.camera.latitude = event.coords.lat
    this.camera.longitude = event.coords.lng
  }

  updateCamera = () => {
    this.adminService.updateCamera(this.cameraId, this.camera).subscribe(
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
  deleteCamera = () => {
    this.adminService.deleteCamera(this.cameraId).subscribe(
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
