import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AuthService } from '../auth.service';
import { UserService } from '../services/user.service';
import { UserUser } from '../model/user-user.model'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-user-user',
  templateUrl: './user-user.component.html',
  styleUrls: ['./user-user.component.scss'],
})
export class UserUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource : MatTableDataSource<UserUser>
  length
/*   data_admin:any;
  user_data:any;
  datas : any; */
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['user_id','username', 'email', 'firstname', 'lastname', 'phonenumber', 'created_at'];

  constructor(public authService : AuthService, private userService: UserService) {
   
   }

  ngOnInit() {
    /* this.dataSource = new UserUserDataSource(this.paginator, this.sort); */
   //
   console.log(ELEMENT_DATA)
   
   this.userService.getUser().subscribe(record => {
    this.dataSource = new MatTableDataSource(record);
   // console.log(record[0]['user'])
    this.length = record.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.user.username.toLowerCase().includes(filter) || 
      data.user.email.toLowerCase().includes(filter) || 
      data.user.firstname.toLowerCase().includes(filter) || 
      data.user.lastname.toLowerCase().includes(filter) || 
      data.user.phonenumber.toString().includes(filter) || 
      data.user.created_at.toString().includes(filter) || 
      data.user.created_at.toLowerCase().includes(filter)
    };
  }); 



  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
