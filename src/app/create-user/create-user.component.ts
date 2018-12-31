import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';
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
  constructor() { }

  ngOnInit() {
  }

}
