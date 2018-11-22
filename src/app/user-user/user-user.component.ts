import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-user',
  templateUrl: './user-user.component.html',
  styleUrls: ['./user-user.component.scss'],
})
export class UserUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource 
  length
/*   data_admin:any;
  user_data:any;
  datas : any; */
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'email', 'firstname', 'lastname', 'phonenumber'];

  constructor(public authService : AuthService, private userService: UserService) {
   
   }

  ngOnInit() {
    /* this.dataSource = new UserUserDataSource(this.paginator, this.sort); */
   //

   this.userService.getUser().subscribe(record => {
    this.dataSource = new MatTableDataSource(record);
    this.length = record.length;
    this.dataSource.paginator = this.paginator;
    //console.log(this.dataSource.data.length)
  }); 


  }

  ngAfterViewInit() {
  }

 /*  getUser(){
    const datas  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(datas);
    //console.log(this.data_admin['access_token'])
    this.authService.getData("api/admin/user_show", this.data_admin['access_token']).subscribe(data => {
      console.log(datas);
      return this.datas = datas;
    });
  } */


}
