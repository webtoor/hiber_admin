import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

let apiUrl = "http://127.0.0.1:8000/";

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
        'Authorization': access_token
      })
    };
    return this.http.post<any>(apiUrl+type, credentials, httpOptions)
    .pipe(
      
    );
  }
}
