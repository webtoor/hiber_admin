import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
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
    password: '',
    password_confirmation : '',
    registerType : '1'}

  constructor(public providerService : ProviderService) { }

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
    this.providerService.postData(this.createUser, "register").subscribe(
      res => {
        console.log(res)
        if(res.success == true){
          alert ('Create Provider Success!');
        }
        if(res.error){
          alert (res.error.email[0]);
        }
    
    },
      err => console.log(err)
    )
  }else{
    alert ('All field is required!!');
  }
}
}
