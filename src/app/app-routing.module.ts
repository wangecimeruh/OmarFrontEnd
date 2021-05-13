import { SideNavComponent } from './side-nav/side-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [


  {path: '', component: HomeComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'products', component: ProductComponent},
  {path: 'orders', component: OrderComponent},
  {path: 'measurements', component: MeasurementsComponent},
  {path: 'new-order', component: AddOrderComponent},
  {path: 'editcustomer', component: EditCustomerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
