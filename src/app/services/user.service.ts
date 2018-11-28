import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserUser } from '../model/user-user.model';
import { UserOrder } from '../model/user-order.model';
import { map, catchError } from 'rxjs/operators';
let apiUrl = "http://127.0.0.1:8000/api/admin/";
let serviceUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data_admin:any;
  constructor(private http: HttpClient ) {}

   getUser() : Observable<UserUser[]> {
    const data  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(data);
    //console.log(this.data_admin)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.data_admin['access_token']
      })
    };
   //return this.http.get<UserUser[]>(apiUrl + 'user_show', httpOptions)
   return this.http.get<UserUser[]>(apiUrl + 'user_show', httpOptions) 
   .pipe(
    map(res => {
      if (res['success'] == false) {
        throw new Error('Value expected!');
      }
      //console.log(res['data'])
      return res['data'];
    }),
    catchError(this.handleError)
  );
}  

getOrder() : Observable<UserOrder[]> {
  const data  = localStorage.getItem('adminData');
  this.data_admin = JSON.parse(data);
  //console.log(this.data_admin)
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.data_admin['access_token']
    })
  };
 //return this.http.get<UserUser[]>(apiUrl + 'user_show', httpOptions)
 return this.http.get<UserOrder[]>(apiUrl + 'order_show', httpOptions) 
 .pipe(
  map(res => {
    if (res['success'] == false) {
      throw new Error('Value expected!');
    }
    //console.log(res['data'])
    return res['data'];
  }),
  catchError(this.handleError)
);
}  
   

  private handleError(error: Response | any) {  
    console.error(error.message || error);  
    return Observable.throw(error.status);  
  }  
  
/*   getUser(): Observable<UserUser[]> {
    return this.http.get<UserUser[]>(serviceUrl);
  } */
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
}
