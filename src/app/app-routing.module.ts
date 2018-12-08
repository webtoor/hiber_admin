import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserUserComponent } from './user-user/user-user.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ProviderProviderComponent} from './provider-provider/provider-provider.component';
import { AuthGuardService } from './guards/auth-guard.service';



const routes: Routes = [ 
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path:'login' , component: LoginComponent },
  { path:'dashboard' , component: DashboardComponent, canActivate : [AuthGuardService] },
  { path:'user' , component: UserUserComponent, canActivate : [AuthGuardService] },
  { path:'order' , component: UserOrderComponent, canActivate : [AuthGuardService] },
  { path:'order/detail/:id' , component:  OrderDetailComponent, canActivate : [AuthGuardService] },
  { path:'provider' , component: ProviderProviderComponent, canActivate : [AuthGuardService] },


 ];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
