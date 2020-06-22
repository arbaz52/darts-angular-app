import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};

const url: string = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class AuthoritativeService {

  constructor(private http: HttpClient) { }




  login(email, password) {
    return this.http.post("http://localhost:3000/authoritative/login", {
      user: {
        email, password
      }
    }, httpOptions)
  }

  logout() {
    return this.http.post("http://localhost:3000/authoritative/logout", {}, httpOptions)
  }

  isLoggedIn() {
    return this.http.get("http://localhost:3000/authoritative/isLoggedIn", httpOptions)
  }






  addSuspect(suspect) {
    return this.http.post("http://localhost:3000/authoritative/suspects/", {
      suspect
    }, httpOptions)
  }
  getSuspect(suspectId) {
    return this.http.get("http://localhost:3000/authoritative/suspects/" + suspectId, httpOptions)
  }
  getSuspects() {
    return this.http.get("http://localhost:3000/authoritative/suspects/", httpOptions)
  }



  getAvailablePeopleAdmin() {
    return this.http.get(url + "authoritative/admin/person", httpOptions)
  }

  addAdmin(admin) {
    return this.http.post(url + "authoritative/admin/", {
      admin
    }, httpOptions)
  }

  getAvailablePeopleAuthoritative() {
    return this.http.get(url + "authoritative/authoritative/person", httpOptions)
  }
  addAp(ap) {
    return this.http.post(url + "authoritative/authoritative/", {
      ap
    }, httpOptions)
  }



  //for map
  //get list of all cameras
  mGetCameras = () => {
    return this.http.get(url + "authoritative/map/cameras", httpOptions)
  }
  //get list of all alerts
  mGetAlerts = () => {
    return this.http.get(url + "authoritative/map/alerts", httpOptions)
  }
  //get list of all servers
  mGetServers = () => {
    return this.http.get(url + "authoritative/map/servers", httpOptions)
  }
  //get list of all qrunits
  mGetQRUnits = () => {
    return this.http.get(url + "authoritative/map/qrunits", httpOptions)
  }

  mSearchLocation = (q) => {
    return this.http.get(url + "authoritative/map/search/"+q, httpOptions)
  }

  getSuspectAlerts = (suspectId) => {
    return this.http.get(url + "authoritative/map/alerts/"+suspectId, httpOptions)
  }
}
