import { Component, OnInit } from '@angular/core';
import { Bagel } from '../bagel';
import { DataSingleton } from '../data-singleton';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bagels: Bagel[];

  constructor() {
    this.bagels = DataSingleton.cart;
  }

  ngOnInit() {
  }

}
