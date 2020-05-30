import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};

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
    return this.http.get("http://localhost:3000/authoritative/suspects/" , httpOptions)
  }
}
