import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post("http://localhost:3000/admin/login", {
      user: {
        email, password
      }
    }, httpOptions)
  }

  logout() {
    return this.http.post("http://localhost:3000/admin/logout", {}, httpOptions)
  }


  isLoggedIn() {
    return this.http.get("http://localhost:3000/admin/isLoggedIn", httpOptions)
  }


  addCamera(camera) {
    return this.http.post("http://localhost:3000/admin/cameras/", {
      camera
    }, httpOptions)
  }
  getCameras(){
    return this.http.get("http://localhost:3000/admin/cameras/", httpOptions)
  }
  getCamera(cameraId){
    return this.http.get("http://localhost:3000/admin/cameras/"+cameraId, httpOptions)
  }


  updateCamera(cameraId, camera){
    return this.http.put("http://localhost:3000/admin/cameras/"+cameraId, {
      camera
    }, httpOptions)
  }

  deleteCamera(cameraId){
    return this.http.delete("http://localhost:3000/admin/cameras/"+cameraId, httpOptions)
  }





  addServer(server) {
    return this.http.post("http://localhost:3000/admin/servers/", {
      server
    }, httpOptions)
  }
  getServers(){
    return this.http.get("http://localhost:3000/admin/servers/", httpOptions)
  }
  getServer(serverId){
    return this.http.get("http://localhost:3000/admin/servers/"+serverId, httpOptions)
  }


  updateServer(serverId, server){
    return this.http.put("http://localhost:3000/admin/servers/"+serverId, {
      server
    }, httpOptions)
  }

  deleteServer(serverId){
    return this.http.delete("http://localhost:3000/admin/servers/"+serverId, httpOptions)
  }
                   

}
