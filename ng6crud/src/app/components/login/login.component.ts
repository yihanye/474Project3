import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.loginForm();
  }

  loginForm() {
    this.angForm = this.fb.group({
      email:['', Validators.required ],
      password: ['', Validators.required ]
   });
  }

  login(email, password) {
    this.adunitservice.login(email, password);
}

  ngOnInit() {
  }
}