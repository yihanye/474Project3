import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService,private route: ActivatedRoute,) { }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }
}
