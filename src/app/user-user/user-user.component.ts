import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserUserDataSource } from './user-user-datasource';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserUser } from '../model/user-user.model';

@Component({
  selector: 'app-user-user',
  templateUrl: './user-user.component.html',
  styleUrls: ['./user-user.component.scss'],
})
export class UserUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new UserUserDataSource (this.userService);
  data_admin:any;
  user_data:any;
  data : any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'email'];
  constructor(public authService : AuthService, private userService: UserService) {
   
   }
  ngOnInit() {
    /* this.dataSource = new UserUserDataSource(this.paginator, this.sort); */
  }
  getUser(){
    const data  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(data);
    //console.log(this.data_admin['access_token'])
    this.authService.getData("api/admin/user_show", this.data_admin['access_token']).subscribe(data => {
      console.log(data);
      return this.data = data;
    });
  }


}
