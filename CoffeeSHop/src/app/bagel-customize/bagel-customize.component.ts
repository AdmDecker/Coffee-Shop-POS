import { Component, OnInit } from '@angular/core';
import { DataSingleton } from '../data-singleton';
import { Router } from '@angular/router';
import { Bagel } from '../bagel';

@Component({
  selector: 'app-bagel-customize',
  templateUrl: './bagel-customize.component.html',
  styleUrls: ['./bagel-customize.component.scss']
})
export class BagelCustomizeComponent implements OnInit {
  headerText: string;
  bagel: Bagel;

  constructor(private router: Router) {
    this.headerText = DataSingleton.selectedBagel.name;
    this.bagel = DataSingleton.selectedBagel;
   }

  ngOnInit() {
  }

  toggleCreamCheese(){
    DataSingleton.selectedBagel.creamCheese = !DataSingleton.selectedBagel.creamCheese;
  }

  toggleGrapeJelly() {
    DataSingleton.selectedBagel.appleJelly = !DataSingleton.selectedBagel.appleJelly;
  }

  toggleAppleJelly() {
    DataSingleton.selectedBagel.grapeJelly = !DataSingleton.selectedBagel.grapeJelly;
  }

  toggleButter() {
    DataSingleton.selectedBagel.butter = !DataSingleton.selectedBagel.butter;
  }

  addToCart() {
    const clone = Object.create(DataSingleton.selectedBagel);
    DataSingleton.cart.push(DataSingleton.selectedBagel);
    //console.log('added item');
    this.router.navigate(['/']);
  }
}
