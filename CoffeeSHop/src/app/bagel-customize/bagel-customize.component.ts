import { Component, OnInit } from '@angular/core';
import { DataSingleton } from '../data-singleton';

@Component({
  selector: 'app-bagel-customize',
  templateUrl: './bagel-customize.component.html',
  styleUrls: ['./bagel-customize.component.scss']
})
export class BagelCustomizeComponent implements OnInit {
  headerText: string;

  constructor() {
    this.headerText = DataSingleton.selectedBagel.name;
   }

  ngOnInit() {
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
    console.log('adding item');
  }
}
