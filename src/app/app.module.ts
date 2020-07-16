import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, FormBuilder, FormGroup } from '@angular/forms' 

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
import { AgmDirectionModule } from 'agm-direction';

import { FileUploadModule } from 'ng2-file-upload';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AutoAssignCameraComponent } from './auto-assign-camera/auto-assign-camera.component';
import { AddQrunitComponent } from './add-qrunit/add-qrunit.component';
import { QrunitLoginWithQrcodeComponent } from './qrunit-login-with-qrcode/qrunit-login-with-qrcode.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthoritativeComponent } from './add-authoritative/add-authoritative.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { TestComponent } from './test/test.component';
import { ViewLiveFeedComponent } from './view-live-feed/view-live-feed.component';
import { ViewAlertComponent } from './view-alert/view-alert.component';
import { SuspectDetailsComponent } from './suspect-details/suspect-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { TestsOnlyComponent } from './tests-only/tests-only.component';
import { ToastrModule, GlobalConfig } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { ServerDetailsComponent } from './server-details/server-details.component';

import { MatChipsModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatButtonModule, MatIconModule, MatDialogModule, MatSliderModule } from '@angular/material/';
import { ChipperComponent } from './chipper/chipper.component';
import { TempDialogComponent } from './temp-dialog/temp-dialog.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { MapWithSearchComponent } from './map-with-search/map-with-search.component';
import { AdjustPreprocessingComponent } from './adjust-preprocessing/adjust-preprocessing.component';
import { QrunitDetailsComponent } from './qrunit-details/qrunit-details.component'

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

const toastOptions:Partial<GlobalConfig>  = {
  timeOut: 2000,
  progressBar: true,
  progressAnimation: 'decreasing',
  positionClass: 'toast-bottom-right'
}

const firebaseConfig: {} = {
  apiKey: "AIzaSyBtc_hk_Aamj-hBDpD2s0OyrzEBgbp4KeI",
  authDomain: "fypqrf-b3259.firebaseapp.com",
  databaseURL: "https://fypqrf-b3259.firebaseio.com",
  projectId: "fypqrf-b3259",
  storageBucket: "fypqrf-b3259.appspot.com",
  messagingSenderId: "571613899436",
  appId: "1:571613899436:web:48a1be034b95c3d3cf4d09"
}

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
    TestComponent,
    ViewLiveFeedComponent,
    ViewAlertComponent,
    SuspectDetailsComponent,
    PersonDetailsComponent,
    TestsOnlyComponent,
    CameraDetailsComponent,
    ServerDetailsComponent,
    ChipperComponent,
    TempDialogComponent,
    AddPersonComponent,
    MapWithSearchComponent,
    AdjustPreprocessingComponent,
    QrunitDetailsComponent,
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
    AgmDirectionModule,

    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, "fypqrf-b3259"),
    AngularFireDatabaseModule,


    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(toastOptions) // ToastrModule added

    //material layout
    ,
    MatStepperModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSliderModule,
    MatIconModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TempDialogComponent
  ]
})
export class AppModule { }
