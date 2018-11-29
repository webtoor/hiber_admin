import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProviderUserDataSource } from './provider-user-datasource';

@Component({
  selector: 'app-provider-user',
  templateUrl: './provider-user.component.html',
  styleUrls: ['./provider-user.component.scss'],
})
export class ProviderUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProviderUserDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProviderUserDataSource(this.paginator, this.sort);
  }
}
