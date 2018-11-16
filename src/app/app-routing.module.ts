import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserUserComponent } from './user-user/user-user.component';



const routes: Routes = [ 
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path:'login' , component: LoginComponent },
  { path:'dashboard' , component: DashboardComponent },
  { path:'user' , component: UserUserComponent },

/*   { path:'user' , component: UserComponent },
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
