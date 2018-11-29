import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProviderProviderDataSource } from './provider-provider-datasource';

@Component({
  selector: 'app-provider-provider',
  templateUrl: './provider-provider.component.html',
  styleUrls: ['./provider-provider.component.scss'],
})
export class ProviderProviderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProviderProviderDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProviderProviderDataSource(this.paginator, this.sort);
  }
}
