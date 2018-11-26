import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from '../services/user.service';
import { UserOrder } from '../model/user-order.model'

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss'],
})
export class UserOrderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<UserOrder>
  length
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['subject', 'projecttype', 'dtprojectstart', 'dtprojectend', 'created_at'];
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getOrder().subscribe(record => {
      this.dataSource = new MatTableDataSource(record);
      console.log(record)
      this.length = record.length;
      this.dataSource.paginator = this.paginator;
    }); 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
}
