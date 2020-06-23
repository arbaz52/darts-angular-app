import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  

  email: string
  password: string


  constructor(private adminService: AdminService, private router: Router, private toaster: ToasterService) { }


  login(){
    this.adminService.login(this.email, this.password).subscribe(
      (data: any) => {
        if(data.err){
          this.toaster.err(data.err.message)
        }else if(data.succ){
          this.toaster.succ(data.succ.message)
          this.router.navigate(["admin/home"])
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
