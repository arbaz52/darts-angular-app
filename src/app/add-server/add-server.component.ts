import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

  comsats: {} = {
    zoom: 16,
    longitude: 73.156456,
    latitude: 33.651592
  }
  locationSelected: boolean = false;
  locationCoords: {
    longitude: Number,
    latitude: Number
  } = {
      longitude: 0,
      latitude: 0
    }
  url: string;
  name: string;

  choseThisLocation = (event) => {
    console.log(event)
    this.locationSelected = true
    this.locationCoords.latitude = event.coords.lat
    this.locationCoords.longitude = event.coords.lng

  }


  addServer = () => {
    if(this.url != ""
    && this.name != ""
    && this.locationCoords.latitude != 0
    && this.locationCoords.longitude != 0){
      let server = {
        url: this.url,
        name: this.name,
        longitude: this.locationCoords.longitude,
        latitude: this.locationCoords.latitude
      }
      this.adminService.addServer(server).subscribe(
        (data: any) => {
          if(data.err){
            alert(data.err.message)
          }else if(data.succ){
            alert(data.succ.message)
            this.router.navigate(["admin/servers/"+data.server._id])
          }
        },
        (err: any) => {
          alert(err)
        },
        () => {

        }
      )
    }else{
      alert("Please fill in all the details")
    }
  }




  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

}
