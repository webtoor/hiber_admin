import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { UserUser } from '../model/user-user.model';

let apiUrl = "http://127.0.0.1:8000/api/admin/";
let serviceUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data_admin:any;
  constructor(private http: HttpClient) {}

   getUser() : Observable<UserUser[]> {
    const data  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(data);
    console.log(this.data_admin)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.data_admin['access_token']
      })
    };
   
   return this.http.get<UserUser[]>(apiUrl + 'user_show', httpOptions)

  } 

  
  
/*   getUser(): Observable<UserUser[]> {
    return this.http.get<UserUser[]>(serviceUrl);
  } */
  
}
