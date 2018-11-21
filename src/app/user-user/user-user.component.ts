import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserUserDataSource } from './user-user-datasource';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-user',
  templateUrl: './user-user.component.html',
  styleUrls: ['./user-user.component.scss'],
})
export class UserUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserUserDataSource;
  data_admin:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  constructor(public authService : AuthService) {
   
   }
  ngOnInit() {
    this.dataSource = new UserUserDataSource(this.paginator, this.sort);
    this.getUser();
  }
  getUser(){
    const data  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(data);
    //console.log(this.data_admin['access_token'])
    this.authService.getData("api/admin/user_show", this.data_admin['access_token']).subscribe(data => {
      console.log(data);
    });
  }
}
