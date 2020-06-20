import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrunit-login-with-qrcode',
  templateUrl: './qrunit-login-with-qrcode.component.html',
  styleUrls: ['./qrunit-login-with-qrcode.component.css']
})
export class QrunitLoginWithQrcodeComponent implements OnInit {
  authId = ""
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authId = this.activatedRoute.snapshot.paramMap.get("authId")
  }

}
