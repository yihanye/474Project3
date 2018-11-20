import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      email:['', Validators.required ],
      unit_course: ['', Validators.required ],
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }

  addAdUnit(email, unit_course, unit_name, unit_price) {
    this.adunitservice.addAdUnit(email, unit_course, unit_name, unit_price);
}

  ngOnInit() {
  }
}
