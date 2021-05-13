import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../entities/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer!: Customer;
  editForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer();

    this.editForm = this.formBuilder.group({
      id: [''],
      customerName:[''],
      phoneNumber: [''],

    
  });

  }
  onSubmit() {
    this.customerService.updateCustomer(this.customer,this.customer.id).subscribe((response: any) => {
      console.log('************** ',response);
    });
  
  }

}
