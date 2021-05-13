import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Product } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product[];
  productOne: Product;

  constructor(private customerService:CustomerService, private route : Router) {
    this.productOne = new Product();

   }

  ngOnInit() {
    this.customerService.findAllProducts().subscribe(data => {
      this.product = data;
    });

  }

  onSubmit() {
    this.customerService.saveProduct(this.productOne).subscribe((response: any) => {
      console.log('************** ',response);
    });
  
  }

  onDelete(id : any){
    alert(id);
   this.customerService.deleteProduct(id).subscribe();
  
   
   }
   edit(product: Product) {
    this.customerService.setProduct(product);
    this.route.navigate(['editcustomer']);
  }

}
