import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../entities/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer[];
  customerOne: Customer;


  constructor(private customerService:CustomerService, private route : Router) {
    this.customerOne = new Customer();
    
   } 

  ngOnInit() {
    console.log("*******************************8 customer"+this.customerService.findAllCustomers());
    
    this.customerService.findAllCustomers().subscribe(data => {
      this.customer = data;
      console.log("************ customers "+data);
  });

}

onSubmit() {
  this.customerService.saveCustomer(this.customerOne).subscribe((response: any) => {
    console.log('************** ',response);
  });

}

onDelete(id : any){
  alert(id);
 this.customerService.deleteCustomer(id).subscribe();

 
 }
 edit(customer: Customer) {
  this.customerService.setCustomer(customer);
  this.route.navigate(['editcustomer']);
}

}
 