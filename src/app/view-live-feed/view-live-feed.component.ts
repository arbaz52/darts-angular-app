import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-view-live-feed',
  templateUrl: './view-live-feed.component.html',
  styleUrls: ['./view-live-feed.component.css']
})
export class ViewLiveFeedComponent implements OnInit {

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
  constructor(private apService: AuthoritativeService, private activatedRoute: ActivatedRoute, private toaster: ToasterService) { }

  ngOnInit() {
    this.cameraId = this.activatedRoute.snapshot.paramMap.get("cameraId")

    this.apService.getCamera(this.cameraId).subscribe(
      
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

}
