import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
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
    password: '',
    password_confirmation : '',
    registerType : '2'}
  constructor(public userService : UserService) { }

  ngOnInit() {
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
  submit(){
    this.createUser.username = this.username.value;
    this.createUser.firstname = this.firstname.value;
    this.createUser.lastname = this.lastname.value;
    this.createUser.email = this.email.value;
    this.createUser.phonenumber = this.phonenumber.value;
    this.createUser.password = this.password.value;
    this.createUser.password_confirmation = this.password.value;
    console.log(this.createUser)
    if(this.createUser.email && this.createUser.password){
    this.userService.postData(this.createUser, "register").subscribe(
      res => {
        console.log(res)
        if(res.success == true){
          alert ('Create Provider Success!');
        }
        if(res.error.email[0]){
          alert ('The email has already been taken!!');
        }
    
    },
      err => console.log(err)
    )
  }else{
    alert ('All field is required!!');
  }
}

}
