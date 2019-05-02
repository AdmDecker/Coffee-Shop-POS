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
  HasOrders: boolean;

  constructor() {
    this.bagels = DataSingleton.cart;
    if(this.bagels.length == 0){
      this.HasOrders = false;
    }
    else{
      this.HasOrders = true;
    }
  }

  ngOnInit() {
  }

  removeFromCart(removedBagel: Bagel){
    //console.log(removedBagel);
    const index = DataSingleton.cart.indexOf(removedBagel, 0);
    if(index > -1){
      DataSingleton.cart.splice(index, 1);
    }
    if(this.bagels.length == 0){
      this.HasOrders = false;
    }
    else{
      this.HasOrders = true;
    }
  }
}
