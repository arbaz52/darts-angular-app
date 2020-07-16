import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthoritativeService } from '../authoritative.service';
import { FileUploader } from 'ng2-file-upload';
import { TplapiService } from '../tplapi.service';
import { ToasterService } from '../toaster.service';
import { DialogData, TempDialogComponent } from '../temp-dialog/temp-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-suspect',
  templateUrl: './view-suspect.component.html',
  styleUrls: ['./view-suspect.component.css']
})
export class ViewSuspectComponent implements OnInit {
  //dialog
  clickOnImage = (url) => {
    
    var d: DialogData = {
      btnNo: "Delete",
      btnYes: "View",
      description: "You selected an image, what you do want to do with it?",
      title: "Image selected!"
    }
    var dia = this.dialog.open(TempDialogComponent, {
      data: d
    })
    dia.componentInstance.no.subscribe(x => {
      this.toaster.info("Deleting image!")
      var index = this.suspect.pictures.indexOf(url)
      if(index > -1){
        this.suspect.pictures.splice(index, 1)
        this.updateSuspect()
      }
      dia.close()
    })
    dia.componentInstance.yes.subscribe(x => {
      this.toaster.succ(x)
      window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      );
      dia.close()
    })
  }



  //chipper
  updateSuspectTags(tags) {
    console.log(tags)
    this.suspect.tags = tags;
  }

  viewAlert = (alert) => {
    console.log('working')
    this.router.navigate(["authoritative/alert/" + alert._id])
  }
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
          this.toaster.err(data.err || data.error)
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
    tags: string[]
  } = {
      _id: "",
      fullName: "",
      gender: "",
      pictures: [],
      tags: []
    }
  suspectId: string;

  uploader: FileUploader;
  constructor(private authoritativeService: AuthoritativeService, private activatedRoute: ActivatedRoute, private tplapi: TplapiService, private toaster: ToasterService, private router: Router, public dialog: MatDialog) {


  }

  uploadFiles = () => {
    this.uploader.uploadAll()
    this.toaster.info("pictures are being uploaded")
  }

  ngOnInit() {

    this.suspectId = this.activatedRoute.snapshot.paramMap.get("suspectId")
    this.uploader = new FileUploader({
      url: "https://darts-web-server.herokuapp.com/authoritative/suspects/" + this.suspectId + "/picture",
      method: "PUT",
      itemAlias: "picture"
    });
    this.uploader.response.subscribe(
      (data) => {
        data = JSON.parse(data)
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.toaster.succ(data.succ)
          this.suspect = data.suspect
          this.suspect.pictures.push(data.frame_url)
          console.log(this.suspect)
        }
      },
      (err) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
    this.authoritativeService.getSuspect(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.suspect = data.suspect
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )




    //for map
    this.authoritativeService.getSuspectAlerts(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          // console.log(data)
          this.alerts = data.alerts
          if (this.alerts.length > 0) {
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
        this.toaster.err(err)
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



  deleteSuspect = () => {

    this.toaster.info("Deleting suspect! Please wait")
    this.authoritativeService.deleteSuspect(this.suspectId).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          this.toaster.succ(data.succ)
          this.router.navigate(["/authoritative/home"])
        }
      },
      (err: any) => {
        this.toaster.err(err)
      },
      () => {

      }
    )
  }

  updateSuspect = () => {
    this.toaster.info("Updating suspect! Please wait")
    this.authoritativeService.updateSuspect(this.suspect).subscribe(

      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err.message)
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.toaster.succ(data.succ)
          this.suspect = data.suspect
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
