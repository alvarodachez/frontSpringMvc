import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  customers: Customer[];
  nameCustomer: string;
  customerNameUpdate: string;
  customerSurnameUpdate: string;
  idToUpdate: any;
  constructor(private route: ActivatedRoute, private customerService: CustomerServiceService) { }

  ngOnInit(): void {

    this.nameCustomer = this.route.snapshot.paramMap.get('nameCustomer');
    this.customerService.getCustomerByName(this.nameCustomer).subscribe(
      response => {
        console.log(response);
        this.customers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  setIdToUpdate(id: any): void {

    this.idToUpdate = id;
  }
  updateCustomer(): void {

    const customer = {
      customerName: this.customerNameUpdate,
      customerSurname: this.customerSurnameUpdate
    };
    this.customerService.updateCustomer(customer, this.idToUpdate).subscribe(
      response => {
        console.log(response);
        this.nameCustomer = this.route.snapshot.paramMap.get('nameCustomer');
        this.customerService.getCustomerByName(this.nameCustomer).subscribe(
          response => {
            console.log(response);
            this.customers = response;
          },
          error => {
            console.log(error);
          }
        );
      }
    );

    this.customerNameUpdate = "";
    this.customerSurnameUpdate = "";
  }
  deleteCustomer(id: any): void {

    this.customerService.deleteCustomer(id).subscribe(response => {
      console.log(response);
      this.nameCustomer = this.route.snapshot.paramMap.get('nameCustomer');
      this.customerService.getCustomerByName(this.nameCustomer).subscribe(
        response => {
          console.log(response);
          this.customers = response;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

}
