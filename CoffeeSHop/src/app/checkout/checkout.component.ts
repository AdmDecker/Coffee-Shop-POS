import { Component, OnInit } from '@angular/core';
import { Bagel } from '../bagel';
import { DataSingleton } from '../data-singleton';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  bagels: Bagel[];
  
  constructor() { 
    this.bagels = DataSingleton.cart;
  }

  ngOnInit() {
  }

}
