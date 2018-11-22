import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { UserUser } from '../model/user-user.model';
import { UserService } from '../services/user.service';

// TODO: replace this with real data from your application
/*  const EXAMPLE_DATA: UserUser[] =  [
  {id: 1, firstname: 'Hydrogen', lastname: 'Hydrogen'},
  {id: 2, firstname: 'Helium', lastname: 'Hydrogen'},
];  */

/**
 * Data source for the UserUser view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserUserDataSource extends DataSource<any> {
 /*  data  : UserUser[] = EXAMPLE_DATA */
    data 
  constructor(public paginator:MatPaginator, public userService: UserService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */

   connect(): Observable<UserUser[]> {
     this.data =  this.userService.getUser();
    return this.data
  }
  disconnect() {} 

