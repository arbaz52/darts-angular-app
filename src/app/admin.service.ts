import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};

// const url: string = "http://localhost:3000/"
const url: string = "https://darts-web-server.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post(url+"admin/login", {
      user: {
        email, password
      }
    }, httpOptions)
  }

  logout() {
    return this.http.post(url+"admin/logout", {}, httpOptions)
  }


  isLoggedIn() {
    return this.http.get(url+"admin/isLoggedIn", httpOptions)
  }


  addCamera(camera) {
    return this.http.post(url+"admin/cameras/", {
      camera
    }, httpOptions)
  }
  getCameras(){
    return this.http.get(url+"admin/cameras/", httpOptions)
  }
  getCamera(cameraId){
    return this.http.get(url+"admin/cameras/"+cameraId, httpOptions)
  }
  searchCamerasAtLocation(q){
    return this.http.get(url+"admin/cameras/search/"+q, httpOptions)
  }


  updateCamera(cameraId, camera){
    return this.http.put(url+"admin/cameras/"+cameraId, {
      camera
    }, httpOptions)
  }

  deleteCamera(cameraId){
    return this.http.delete(url+"admin/cameras/"+cameraId, httpOptions)
  }

  autoAssign(){
    return this.http.post(url+"admin/cameras/autoassign/", {}, httpOptions)
  }







  addServer(server) {
    return this.http.post(url+"admin/servers/", {
      server
    }, httpOptions)
  }
  getServers(){
    return this.http.get(url+"admin/servers/", httpOptions)
  }
  getServer(serverId){
    return this.http.get(url+"admin/servers/"+serverId, httpOptions)
  }


  updateServer(serverId, server){
    return this.http.put(url+"admin/servers/"+serverId, {
      server
    }, httpOptions)
  }

  deleteServer(serverId){
    return this.http.delete(url+"admin/servers/"+serverId, httpOptions)
  }
                   



  getAvailablePeople(){
    return this.http.get(url+"admin/qrunit/person", httpOptions)
  }

  addQRUnit(qrunit){
    return this.http.post(url+"admin/qrunit/", {
      qrunit
    }, httpOptions)
  }


  getCameraPreprocessingValues(cameraId: string){
    return this.http.get(url+"admin/cameras/"+cameraId+"/preprocessing", httpOptions)
  }
  updateCameraPreprocessingValues(cameraId: string, pre: {}){
    return this.http.put(url+"admin/cameras/"+cameraId+"/preprocessing", {pre}, httpOptions)
  }





  getCurrentAdmin() {
    return this.http.get(url+"admin", httpOptions)
  }

  getQRUnits(){
    return this.http.get(url+"admin/qrunit", httpOptions)
  }
}
