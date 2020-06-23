import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-authoritative-login',
  templateUrl: './authoritative-login.component.html',
  styleUrls: ['./authoritative-login.component.css']
})
export class AuthoritativeLoginComponent implements OnInit {

  email: string
  password: string

  constructor(private authoritativeService: AuthoritativeService, private router: Router, private toaster: ToasterService) { }

  ngOnInit() {
  }


  loginx(){
    this.authoritativeService.login(this.email, this.password).subscribe(
      (data: any) => {
        if(data.err){
          this.toaster.err(data.err.message)
        }else if(data.succ){
          this.toaster.succ(data.succ.message)
          this.router.navigate(["authoritative/home"])
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
