import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddCameraComponent } from './add-camera/add-camera.component';
import { ViewCameraComponent } from './view-camera/view-camera.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ViewServerComponent } from './view-server/view-server.component';
import { AuthoritativeLoginComponent } from './authoritative-login/authoritative-login.component';
import { AuthoritativeHomeComponent } from './authoritative-home/authoritative-home.component';
import { AddSuspectComponent } from './add-suspect/add-suspect.component';
import { ViewSuspectComponent } from './view-suspect/view-suspect.component';
import { AutoAssignCameraComponent } from './auto-assign-camera/auto-assign-camera.component';
import { AddQrunitComponent } from './add-qrunit/add-qrunit.component';
import { QrunitLoginWithQrcodeComponent } from './qrunit-login-with-qrcode/qrunit-login-with-qrcode.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddAuthoritativeComponent } from './add-authoritative/add-authoritative.component';
import { TestComponent } from './test/test.component';
import { ViewLiveFeedComponent } from './view-live-feed/view-live-feed.component';
import { ViewAlertComponent } from './view-alert/view-alert.component';
import { TestsOnlyComponent } from './tests-only/tests-only.component';


const routes: Routes = [
  {
    path: "",
    component: MainHomeComponent
  },
  {
    path: "admin/home",
    component: AdminHomeComponent
  },
  {
    path: "admin/login",
    component: AdminLoginComponent
  },
  {
    path: "admin/cameras/add",
    component: AddCameraComponent
  },
  {
    path: "admin/cameras/autoassign",
    component: AutoAssignCameraComponent
  },
  {
    path: "admin/cameras/:cameraId",
    component: ViewCameraComponent
  },
  {
    path: "admin/servers/add",
    component: AddServerComponent
  },
  {
    path: "admin/servers/:serverId",
    component: ViewServerComponent
  },
  {
    path: "admin/qrunit/authenticate/:authId",
    component: QrunitLoginWithQrcodeComponent
  },

  //qrunits
  {
    path: "admin/qrunits/add",
    component: AddQrunitComponent
  },

  {
    path: "authoritative/login",
    component: AuthoritativeLoginComponent
  },
  {
    path: "authoritative/home",
    component: AuthoritativeHomeComponent
  },
  {
    path: "authoritative/suspects/add",
    component: AddSuspectComponent
  },
  {
    path: "authoritative/suspects/:suspectId",
    component: ViewSuspectComponent
  },



  {
    path: "authoritative/admins/add",
    component: AddAdminComponent
  },
  {
    path: "authoritative/authoritative/add",
    component: AddAuthoritativeComponent
  },
  {
    path: "authoritative/map",
    component: TestComponent
  },
  {
    path: "authoritative/live/:cameraId",
    component: ViewLiveFeedComponent
  },
  {
    path: "authoritative/alert/:alertId",
    component: ViewAlertComponent
  },

  {
    path: "test",
    component: TestsOnlyComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
