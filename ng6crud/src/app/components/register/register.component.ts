import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.registerForm();
  }

  registerForm() {
    this.angForm = this.fb.group({
      email:['', Validators.required ],
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      password: ['', Validators.required ]
   });
  }

  addUser(email, firstName, lastName, password) {
    this.adunitservice.addUser(email, firstName, lastName, password);
}

  ngOnInit() {
  }
}
