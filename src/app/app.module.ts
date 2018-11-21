import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, 
          MatExpansionModule, MatIconModule, MatListModule, 
          MatMenuModule, MatGridListModule, MatCardModule,
          MatTableModule, MatPaginatorModule, MatSortModule,
          MatFormFieldModule, MatInputModule }
from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserUserComponent } from './user-user/user-user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './guards/auth-guard.service';
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    LoginComponent,
    UserUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule 
  ],
  providers: [AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
