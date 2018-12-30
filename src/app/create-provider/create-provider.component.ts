import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.scss']
})
export class CreateProviderComponent implements OnInit {
  username = new FormControl ('', [Validators.required] )
  firstname = new FormControl ('', [Validators.required] )
  lastname = new FormControl ('', [Validators.required] )
  phonenumber = new FormControl ('', [Validators.required] )
  password = new FormControl ('', [Validators.required] )
  email = new FormControl('', [Validators.required, Validators.email]);


  createUser = { 
    username : '',
    firstname : '',
    lastname : '',
    email : '',
    phonenumber : '',
    password: ''}

  constructor() { }

  ngOnInit() {
  }

  createProvider(){

  }
  getErrorUsername() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorFirstname() {
    return this.firstname.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorLastname() {
    return this.lastname.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorPhonenumber() {
    return this.phonenumber.hasError('required') ? 'You must enter a value' : '';
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'You must enter a value' : '';
  }
}
