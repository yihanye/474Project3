import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  ngOnInit() {
  }
}
