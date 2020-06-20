import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms' 

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AddCameraComponent } from './add-camera/add-camera.component';

import { AgmCoreModule } from '@agm/core';
import { ViewCameraComponent } from './view-camera/view-camera.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ViewServerComponent } from './view-server/view-server.component';
import { AuthoritativeLoginComponent } from './authoritative-login/authoritative-login.component';
import { AuthoritativeHomeComponent } from './authoritative-home/authoritative-home.component';
import { AddSuspectComponent } from './add-suspect/add-suspect.component';
import { ViewSuspectComponent } from './view-suspect/view-suspect.component';


import { FileUploadModule } from 'ng2-file-upload';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AutoAssignCameraComponent } from './auto-assign-camera/auto-assign-camera.component';
import { AddQrunitComponent } from './add-qrunit/add-qrunit.component';
import { QrunitLoginWithQrcodeComponent } from './qrunit-login-with-qrcode/qrunit-login-with-qrcode.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthoritativeComponent } from './add-authoritative/add-authoritative.component';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    MainHomeComponent,
    AdminLoginComponent,
    AddCameraComponent,
    ViewCameraComponent,
    AddServerComponent,
    ViewServerComponent,
    AuthoritativeLoginComponent,
    AuthoritativeHomeComponent,
    AddSuspectComponent,
    ViewSuspectComponent,
    AutoAssignCameraComponent,
    AddQrunitComponent,
    QrunitLoginWithQrcodeComponent,
    AddAdminComponent,
    AddAuthoritativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    FileUploadModule,
    AngularFileUploaderModule,
    
    SocketIoModule.forRoot(config),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtc_hk_Aamj-hBDpD2s0OyrzEBgbp4KeI'
    }),

    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
