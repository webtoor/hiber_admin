import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl ('', [Validators.required] )
  user = { email : '', password: ''}
  constructor(public router : Router, public authService : AuthService) { }

  ngOnInit() {
    console.log('loginpage')
    if(localStorage.getItem('adminData') == ''){

    }else{
      this.router.navigate(['/dashboard']);
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a email' :
           this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

  submit(){
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    //console.log(this.user)
    if(this.user.email && this.user.password){
    this.authService.postData(this.user, "login_admin", "").subscribe(
      res => {
        console.log(res)
        if(res.access_token){
        localStorage.setItem('adminData', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      }else{
        alert("Invalid credentials \nThe user credentials were incorrect");
      } 
    },
      err => console.log(err)
    )
  }else{
    return this.getErrorPassword()
  }
}
}
