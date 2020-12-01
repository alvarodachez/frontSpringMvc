import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerServiceService } from '../../services/customer-service.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customerName: string;
  customerSurname: string;
  customerNameUpdate: string;
  customerSurnameUpdate: string;
  idToUpdate: any;

  customers: Customer[];
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {

    this.customerService.getCustomers().subscribe(
      response => {
        console.log(response);
        this.customers = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  createCustomer(): void {

    const customer = {
      customerName: this.customerName,
      customerSurname: this.customerSurname
    };

    console.log(this.customerName);
    this.customerService.createCustomer(customer).subscribe(response => {
      console.log(response);
      this.customerService.getCustomers().subscribe(
        response => {
          console.log(response);
          this.customers = response;
        },
        error => {
          console.log(error);
        }
      );
    });

    this.customerName = "";
    this.customerSurname = "";
  }

  setIdToUpdate(id: any): void {

    this.idToUpdate = id;
  }
  updateCustomer(): void {

    const customer = {
      customerName: this.customerNameUpdate,
      customerSurname: this.customerSurnameUpdate
    };

    console.log(this.idToUpdate);
    this.customerService.updateCustomer(customer, this.idToUpdate).subscribe(
      response => {

        console.log(response);
        this.customerService.getCustomers().subscribe(
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
      this.customerService.getCustomers().subscribe(
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
