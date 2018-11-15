import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl ('', [Validators.required] )
  user = {email : '', password: ''}
  constructor(public router : Router) { }

  ngOnInit() {
    console.log('loginpage')
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
    console.log(this.user)
    this.router.navigate(['/dashboard']);

  }
}
