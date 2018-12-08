import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//let apiUrl = "http://127.0.0.1:8000/";
let apiUrl = "//hiber.eidaramata.com/public/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  postData(credentials, type, access_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' + access_token
      })
    };
    return this.http.post<any>(apiUrl+type, credentials, httpOptions)
    .pipe(
      
    );
  }

  getData(type, access_token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' + access_token
      })
    };
    return this.http.get(apiUrl+type, httpOptions)
    .pipe(
      
      );
  }
 
  isAuthenticated(){
    return localStorage.getItem('adminData');
  }
}
