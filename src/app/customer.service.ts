import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './entities/customer';
import { Product } from './entities/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private findCustomerUrl: string;
  private findProductUrl: string;
  private saveCustomersUrl: string;
  private saveProductUrl: string;
  private deleteCustomerUrl: string;
  private deleteProductUrl:string;
  private updateCustomersUrl: string;
  private updateProductUrl:string;
  private customer!: Customer;
  private product!: Product;


  constructor(private http: HttpClient) {
    this.findCustomerUrl ='http://localhost:8080/api/v1/fetchAllCustomers';
    this.findProductUrl ='http://localhost:8080/api/v1/fetchAllProducts';
    this.saveCustomersUrl ='http://localhost:8080/api/v1/createCustomer';
    this.saveProductUrl ='http://localhost:8080/api/v1/createProduct';
    this.deleteCustomerUrl ='http://localhost:8080/api/v1/deleteCustomer/';
    this.deleteProductUrl ='http://localhost:8080/api/v1/deleteProduct/';
    this.updateCustomersUrl ='http://localhost:8080/api/v1/updateCustomer/';
    this.updateProductUrl ='http://localhost:8080/api/v1/updateProduct/';




   }

  public findAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.findCustomerUrl);
  }
  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.findProductUrl);
  }

  public saveCustomer(customer:Customer){

    return this.http.post<Customer>(this.saveCustomersUrl, customer);
  }

  public saveProduct(product:Product){

    return this.http.post<Product>(this.saveProductUrl, product);
  }

public deleteCustomer(id:any){
  return this.http.delete<Customer>(this.deleteCustomerUrl+`${id}`); 

}
public deleteProduct(id:any){
  return this.http.delete<Product>(this.deleteProductUrl+`${id}`); 

}

updateCustomer(customer: Customer,id:any): Observable<Customer> {
  return this.http.put<Customer>(this.updateCustomersUrl + `${id}`, customer);
}
updateProduct(product: Product,id:any): Observable<Product> {
  return this.http.put<Product>(this.updateProductUrl + `${id}`, product);
}

getCustomer() {
  return this.customer;
}

setCustomer(customer: Customer) {
  this.customer = customer;
}
getProduct() {
  return this.product;
}

setProduct(product: Product) {
  this.product = product;
}

}
