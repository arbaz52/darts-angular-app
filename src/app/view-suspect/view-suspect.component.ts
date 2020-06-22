import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthoritativeService } from '../authoritative.service';
import { FileUploader } from 'ng2-file-upload';
import { TplapiService } from '../tplapi.service';

@Component({
  selector: 'app-view-suspect',
  templateUrl: './view-suspect.component.html',
  styleUrls: ['./view-suspect.component.css']
})
export class ViewSuspectComponent implements OnInit {

  //for map
  alerts: any[] = []

  scaledSize: {} = {
    width: 30,
    height: 30
  }

  comsats: { zoom: number, longitude: number, latitude: number } = {
    zoom: 16,
    longitude: 73.156456,
    latitude: 33.651592
  }

  paths: {} = {};
  tpl: any[] = []
  paths_keys: string[];
  generatePaths = () => {
    for (var i = 0; i < this.alerts.length; i++) {
      var alert = this.alerts[i]
      var suspectId = alert.suspectId._id
      var _ids = Object.keys(this.paths)
      var p = {
        lat: parseFloat(alert.latitude),
        lng: parseFloat(alert.longitude)
      }
      if (_ids.indexOf(suspectId) > -1) {
        this.paths[suspectId].push(p)
      } else {
        this.paths[suspectId] = [p]
      }
    }
    // console.log(this.paths)
    this.paths_keys = Object.keys(this.paths)


    this.tpl = []
    this.paths_keys.forEach((k) => {
      var path = this.paths[k]
      this.tplapi.getRoute(path).subscribe((data: any) => {
        if (data.err || data.error) {
          alert(data.err)
        } else {
          this.tpl.push(data.p[0].p)
          // console.log(data.p[0].p)
          // this.servers = data.servers
        }
      }, (err) => {
        console.log(err)
      })
    })


  }





  tags: string;
  suspect: {
    _id: string,
    fullName: string,
    gender: string,
    pictures: string[],
    tags: []
  } = {
      _id: "",
      fullName: "",
      gender: "",
      pictures: [],
      tags: []
    }
  suspectId: string;

  uploader: FileUploader;
  constructor(private authoritativeService: AuthoritativeService, private activatedRoute: ActivatedRoute, private tplapi: TplapiService) {


  }

  uploadFiles = () => {
    this.uploader.uploadAll()
    alert("pictures are being uploaded")
  }

  ngOnInit() {

    this.suspectId = this.activatedRoute.snapshot.paramMap.get("suspectId")
    this.uploader = new FileUploader({
      url: "http://localhost:3000/authoritative/suspects/" + this.suspectId + "/picture",
      method: "PUT",
      itemAlias: "picture"
    });
    this.uploader.response.subscribe(
      (data) => {
        data = JSON.parse(data)
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspect = data.suspect
          this.suspect.pictures.push(data.frame_url)
          console.log(this.suspect)
        }
      },
      (err) => {
        alert(err)
      },
      () => {

      }
    )
    this.authoritativeService.getSuspect(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspect = data.suspect
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )




    //for map
    this.authoritativeService.getSuspectAlerts(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          alert(data.err.message)
        } else if (data.succ || !(data.err)) {
          // console.log(data)
        this.alerts = data.alerts
        if(this.alerts.length > 0){
          this.comsats.latitude = this.alerts[0].latitude
          this.comsats.longitude = this.alerts[0].longitude
        }
        console.log(this.alerts[0].latitude, this.alerts[0].longitude)
        for (var i = 0; i < this.alerts.length; i++) {
          var alert = this.alerts[i]
          alert.icon = {
            url: alert.suspectId.pictures[0],
            scaledSize: this.scaledSize
          }

        }
        this.generatePaths();
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )



  }

  
  showUnitOnMap = (_id, _list) => {
    console.log(_id)
    for (var i = 0; i < _list.length; i++) {
      if (_list[i]._id == _id) {
        console.log("found")
        var x = _list[i]
        console.log(x.latitude, x.longitude)
        this.comsats.latitude = parseFloat(x.latitude);
        this.comsats.longitude = parseFloat(x.longitude)
        break
      }
    }
  }
}
