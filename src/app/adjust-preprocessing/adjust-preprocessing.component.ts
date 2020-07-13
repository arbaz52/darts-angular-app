import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-adjust-preprocessing',
  templateUrl: './adjust-preprocessing.component.html',
  styleUrls: ['./adjust-preprocessing.component.css']
})
export class AdjustPreprocessingComponent implements OnInit {
  brightness: number = 0.5
  sharpness: number = 1
  denoise: number = 0

  @Input() cameraId: string;

  constructor(private adminService: AdminService, private toaster: ToasterService) { }

  ngOnInit() {
    this.loadCameraPreprocessingValues()

  }


  loadCameraPreprocessingValues() {
    this.toaster.info("Loading Camera's Preprocessing values")
    this.adminService.getCameraPreprocessingValues(this.cameraId).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data)
        } else {

          if (data.pre.brightness)
            this.brightness = data.pre.brightness
          if (data.pre.sharpness)
            this.sharpness = data.pre.sharpness
          if (data.pre.denoise)
            this.denoise = data.pre.denoise

          this.toaster.succ("Done loading the preprocessing values!")
        }
      },
      (error: any) => {
        this.toaster.err(error)
      })
  }
  updateCameraPreprocessingValues = () => {
    this.toaster.info("Updating Camera's Preprocessing values")
    let pre = {
      brightness: this.brightness,
      sharpness: this.sharpness,
      denoise: this.denoise
    }
    this.adminService.updateCameraPreprocessingValues(this.cameraId, pre).subscribe(
      (data: any) => {
        if (data.err) {
          this.toaster.err(data.err)
        } else {

          if (data.pre.brightness)
            this.brightness = data.pre.brightness
          if (data.pre.sharpness)
            this.sharpness = data.pre.sharpness
          if (data.pre.denoise)
            this.denoise = data.pre.denoise

          this.toaster.succ("Done updating the preprocessing values!")
        }
      },
      (error: any) => {
        this.toaster.err(error)
      })
  }

}
