import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent implements OnInit {
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



  constructor(private adminService: AdminService, private router:Router, private toaster: ToasterService) { }

  ngOnInit() {
  }


  addCamera = () => {
    if(this.url != ""
    && this.locationCoords.latitude != 0
    && this.locationCoords.longitude != 0){
      let camera = {
        url: this.url,
        longitude: this.locationCoords.longitude,
        latitude: this.locationCoords.latitude
      }
      this.adminService.addCamera(camera).subscribe(
        (data: any) => {
          if(data.err){
            this.toaster.err(data.err.message)
          }else if(data.succ){
            this.toaster.succ(data.succ.message)
            this.router.navigate(["admin/cameras/"+data.camera._id])
          }
        },
        (err: any) => {
          this.toaster.err(err)
        },
        () => {

        }
      )
    }else{
      this.toaster.err("Please fill in all the details")
    }
  }


  choseThisLocation = (event) => {
    console.log(event)
    this.locationSelected = true
    this.locationCoords.latitude = event.coords.lat
    this.locationCoords.longitude = event.coords.lng

  }
}
