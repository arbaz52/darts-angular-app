import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';
import { AuthoritativeService } from './authoritative.service';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private adminService: AdminService, private authoritativeService: AuthoritativeService, private router: Router, private toaster: ToasterService) { }

  title = 'client';
  didAdminLogin: boolean = false
  didAuthoritativeLogin: boolean = false

  adminLogout() {
    this.toaster.info("Please wait! Working on it")
    this.adminService.logout().subscribe(
      (data: any) => {
        if (data.err)
          this.toaster.err(data.err.message)
        else {
          this.toaster.succ(data.succ.message)
          this.router.navigate(["/"])
        }
      },
      (err: any) => {
        console.error(err)
      },
      () => {

      }
    )
  }

  authoritativeLogout() {
    this.toaster.info("Please wait! Working on it")
    this.authoritativeService.logout().subscribe(
      (data: any) => {
        if (data.err)
          this.toaster.err(data.err.message)
        else {
          this.toaster.succ(data.succ.message)
          this.router.navigate(["/"])
        }
      },
      (err: any) => {
        console.error(err)
      },
      () => {

      }
    )
  }
  ngOnInit() {
    console.log("working")

    this.adminService.isLoggedIn().subscribe(
      (data: any) => {
        if (data.err)
          this.didAdminLogin = false
        else
          this.didAdminLogin = true
        console.log(data)
      },
      (err: any) => {
        console.error(err)
      },
      () => {

      }
    )




    this.authoritativeService.isLoggedIn().subscribe(
      (data: any) => {
        if (data.err)
          this.didAuthoritativeLogin = false
        else
          this.didAuthoritativeLogin = true
        console.log(data)
      },
      (err: any) => {
        console.error(err)
      },
      () => {

      }
    )

  }
}
