import { Component, OnInit } from '@angular/core';
import { FirebasedatabaseService } from '../firebasedatabase.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthoritativeService } from '../authoritative.service';
import { TplapiService } from '../tplapi.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  viewLiveFeed = (camera) => {
    console.log('working')
    this.router.navigate(["authoritative/live/"+camera._id])
  }

  viewAlert = (alert) => {
    console.log('working')
    this.router.navigate(["authoritative/alert/"+alert._id])
  }

  //searching
  search: { query: string, results: any[] } = {
    query: "",
    results: []
  }
  searchResults = []
  searchLocation = (query) => {
    if (query == "")
      this.search.results = []
    else {
      console.log(query)
      this.apService.mSearchLocation(query).subscribe((data: any) => {
        console.log(data)
        if (data.err) {
          this.toaster.err(data.err.message)
        } else {
          this.search.results = data.locations.results
        }
      }, (err) => {
        console.log(err)
      })
    }
  }
  moveMapOver = (loc) => {
    this.comsats.latitude = loc.lat;
    this.comsats.longitude = loc.lng
    this.search.query = ""
    this.search.results = []
  }

  showQRUnit = (_id) => {
    console.log(_id)
    for (var i = 0; i < this.qrunits.length; i++) {
      if (this.qrunits[i]._id == _id) {
        console.log("found")
        var qrunit = this.qrunits[i]
        this.comsats.latitude = qrunit.latitude;
        this.comsats.longitude = qrunit.longitude
        break
      }
    }
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



  filter: {} = {
    cameras: true,
    servers: true,
    qrunits: true,
    alerts: true,
    paths: true
  }
  filter_keys: any[] = [];

  cameras: any[];
  servers: any[];
  qrunits: any[];
  alerts: any[];



  items: any[];
  comsats: { zoom: number, longitude: number, latitude: number } = {
    zoom: 16,
    longitude: 73.156456,
    latitude: 33.651592
  }
  scaledSize: {} = {
    width: 30,
    height: 30
  }
  vehicle_icon: {} = {
    url: "./assets/images/map-icons/people-sharp.svg",
    scaledSize: this.scaledSize
  }
  camera_icon: {} = {
    url: "./assets/images/map-icons/videocam-sharp.svg",
    scaledSize: this.scaledSize
  }
  server_icon: {} = {
    url: "./assets/images/map-icons/server-sharp.svg",
    scaledSize: this.scaledSize
  }
  alert_icon: {} = {
    url: "./assets/images/map-icons/alert-circle-sharp.svg",
    scaledSize: this.scaledSize,
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
          this.toaster.err(data.err)
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

  constructor(private fbdbs: FirebasedatabaseService, private apService: AuthoritativeService, private tplapi: TplapiService, private router: Router, private toaster: ToasterService) { }


  ngOnInit() {
    this.filter_keys = Object.keys(this.filter)
    console.log(this.filter_keys)
    this.loadDataFromServer()


  }
  loadDataFromServer = () => {

    this.apService.mGetCameras().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.cameras = data.cameras
      }
    }, (err) => {
      console.log(err)
    })

    this.apService.mGetServers().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.servers = data.servers
      }
    }, (err) => {
      console.log(err)
    })

    this.getAlertsFromServer()

    this.apService.mGetQRUnits().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.qrunits = data.qrunits

        this.getFirebaseUpdates()
      }
    }, (err) => {
      console.log(err)
    })
  }

  getAlertsFromServer = () => {

    this.apService.mGetAlerts().subscribe((data: any) => {
      if (data.err) {
        this.toaster.err(data.err)
      } else {
        this.alerts = data.alerts
        for (var i = 0; i < this.alerts.length; i++) {
          var alert = this.alerts[i]
          alert.icon = {
            url: alert.suspectId.pictures[0],
            scaledSize: this.scaledSize
          }

        }
        this.generatePaths();
      }
    }, (err) => {
      console.log(err)
    })
  }

  getFirebaseUpdates = () => {

    this.fbdbs.getQRUnits().subscribe(items => {
      this.items = []
      Object.keys(items).map(_id => {
        var item = items[_id]
        item._id = _id
        this.items.push(item)
        //update qrunit locations
        for (var i = 0; i < this.qrunits.length; i++) {
          var qrunit = this.qrunits[i];
          if (qrunit._id == _id) {
            qrunit.longitude = item.longitude
            qrunit.latitude = item.latitude
            this.qrunits[i] = qrunit
            break
          }
        }
      })
    })

    this.fbdbs.getAlerts().subscribe(items => {
      this.getAlertsFromServer()
    })


  }
}
