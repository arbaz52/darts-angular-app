import { Component, OnInit } from '@angular/core';
import { AuthoritativeService } from '../authoritative.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authoritative-login',
  templateUrl: './authoritative-login.component.html',
  styleUrls: ['./authoritative-login.component.css']
})
export class AuthoritativeLoginComponent implements OnInit {

  email: string
  password: string

  constructor(private authoritativeService: AuthoritativeService, private router: Router) { }

  ngOnInit() {
  }


  loginx(){
    this.authoritativeService.login(this.email, this.password).subscribe(
      (data: any) => {
        if(data.err){
          alert(data.err.message)
        }else if(data.succ){
          alert(data.succ.message)
          this.router.navigate(["authoritative/home"])
        }
      },
      (err: any) => {
        alert(err)
      },
      () => {

      }
    )
  }
}
