import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true,
};
const url: string = "https://darts-web-server.herokuapp.com/map"

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  search(query){
    return this.http.get(url+"/search/"+query)
  }
}
