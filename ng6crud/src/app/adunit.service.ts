import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(email, unit_course, unit_name, unit_price) {
    const obj = {
      email: email,
      unit_course: unit_course,
      unit_name: unit_name,
      unit_price: unit_price
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);

  }
  
  getMyBook(email){
    return this.http.get(`${this.uri}/email/${email}`);
  }

  editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }


  updateAdUnit(unit_course, unit_name, unit_price, id) {

    const obj = {
      unit_course: unit_course,
      unit_name: unit_name,
      unit_price: unit_price
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  
  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}