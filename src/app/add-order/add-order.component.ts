import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  selectedCustomer: number;

  customers = [
      { id: 1, name: 'Jedidah Wangeci' },
      { id: 2, name: 'Spencer Ochieng' },

  ];
  selectedProduct: number;

  products = [
      { id: 1, name: 'Kanzu' },
      { id: 2, name: 'Trouser' },

  ];


  constructor() { }

  ngOnInit() {
  }

}
