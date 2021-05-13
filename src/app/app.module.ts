import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { ProductComponent } from './product/product.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
      SideNavComponent,
      OrderComponent,
      CustomerComponent,
      MeasurementsComponent,
      ProductComponent,
      TopNavComponent,
      AddOrderComponent,
      HomeComponent,
      EditCustomerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
