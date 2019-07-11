import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ProviderProvider } from '../model/provider-provider.model'
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-provider',
  templateUrl: './provider-provider.component.html',
  styleUrls: ['./provider-provider.component.scss'],
})
export class ProviderProviderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ProviderProvider>
  length
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['username', 'email', 'firstname', 'lastname', 'phonenumber', 'created_at'];
  constructor(public router : Router, public providerService: ProviderService) {
   
  }
  ngOnInit() {
    this.providerService.getProvider().subscribe(record => {
      this.dataSource = new MatTableDataSource(record);
     console.log(record)
      this.length = record.length;
      this.dataSource.paginator = this.paginator;
       this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.user.username.toLowerCase().includes(filter) || 
        data.user.email.toLowerCase().includes(filter) || 
     /*    data.user.firstname.toLowerCase().includes(filter) || 
        data.user.lastname.toLowerCase().includes(filter) ||  */
        data.user.phonenumber.toString().includes(filter) || 
        data.user.created_at.toString().includes(filter)  
      }; 
    }); 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createProvider(){
    this.router.navigate(['provider/create-provider'])
  }
}
