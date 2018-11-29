import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  data_admin:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(public authService: AuthService, private breakpointObserver: BreakpointObserver, public router : Router) {
    const data  = localStorage.getItem('adminData');
    this.data_admin = JSON.parse(data);
  }
  
  ngOnInit(){
    //console.log(localStorage.getItem('adminData'));
  }
  logoutUser(){
    this.authService.getData('api/logout', this.data_admin['access_token']).subscribe(record => {
      console.log(record)
      localStorage.removeItem('adminData');
      this.router.navigate(['/login']);
    });

  }
}
