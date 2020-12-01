import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  createCustomer(c: any): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers';
    return this.http.post(endPoint, c);
  }

  getCustomers(): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers';
    return this.http.get(endPoint);
  }

  getCustomerById(id): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers/' + id;
    return this.http.get(endPoint);

  }

  getCustomerByName(name): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers/name/' + name;
    return this.http.get(endPoint);
  }
  updateCustomer(c, id): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers/' + id;

    return this.http.put(endPoint, c);
  }

  deleteCustomer(id): Observable<any> {
    const endPoint = 'http://localhost:8080/desafiomvc/customers/' + id;

    return this.http.delete(endPoint);
  }
}

