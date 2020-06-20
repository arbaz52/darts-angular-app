import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-auto-assign-camera',
  templateUrl: './auto-assign-camera.component.html',
  styleUrls: ['./auto-assign-camera.component.css']
})
export class AutoAssignCameraComponent implements OnInit {
  result: string = "Click on yes to start the process"


  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
  }
  autoAssign = () => {
    this.result = ""
    this.result += "Started\n"

    this.adminService.autoAssign().subscribe(
      (data: any) => {
        if (data.err) {
          alert(data.err.message)
          this.result += data.err.message + "\n"
        } else if (data.succ || !(data.err)) {
          console.log(data)
          this.result += data.succ.message + "\n"
        }
      },
      (err: any) => {
        alert(err)
        this.result += err + "\n"
      },
      () => {

      }
    )
  }
}
