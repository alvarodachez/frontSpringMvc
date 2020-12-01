import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'customers',
    component: ListCustomersComponent
  },
  {
    path: 'search/name/:nameCustomer',
    component: SearchCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
