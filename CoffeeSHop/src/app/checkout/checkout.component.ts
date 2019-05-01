import { Component, OnInit } from '@angular/core';
import { Bagel } from '../bagel';
import { DataSingleton } from '../data-singleton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  bagels: Bagel[];
  total: number;
  tip: number;
  viewableTip: string;
  totalWithTip: string;
  
  constructor(private router: Router) { 
    this.bagels = DataSingleton.cart;
    this.total = 0;
    let i = 0;
    for(i = 0; i < this.bagels.length; i++){
      this.total += this.bagels[i].getTotalPrice();
      console.log(this.bagels[i].getTotalPrice());
      console.log(this.total);
    }
    this.tip = 0;
    this.totalWithTip = this.total.toFixed(2);
  }

  calcTip(amount){
    this.tip = this.total * amount;
    this.viewableTip = this.tip.toFixed(2);
    this.totalWithTip = (this.total + this.tip).toFixed(2);
  }

  checkout(){
    DataSingleton.cart = Array<Bagel>();
    this.router.navigate(['/success-screen']);
  }

  ngOnInit() {
  }

}
