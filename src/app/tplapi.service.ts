import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};
const url = "http://api.tplmaps.com:8888/"

@Injectable({
  providedIn: 'root'
})
export class TplapiService {

  constructor(private http: HttpClient) { }


  getRoute = (points) => {
    var ps = ""
    for(var i = 0; i < points.length; i++){
      var p = points[i];
      var s = p.lat+","+p.lng+";"
      ps += s
    }
    var u = url+"route?points="+ps+"&reroute=false&pointsencoded=false&apikey=$2a$10$EAVaIVvXe3gESbS8skWZZe4vpCIazE7q5sDUpL3P1HgyTS5wD8Y8q"
    console.log(u)
    return this.http.get(u)
  }
}
