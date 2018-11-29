import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ProviderProvider } from '../model/provider-provider.model'

@Component({
  selector: 'app-provider-provider',
  templateUrl: './provider-provider.component.html',
  styleUrls: ['./provider-provider.component.scss'],
})
export class ProviderProviderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ProviderProvider>

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
  }
}
