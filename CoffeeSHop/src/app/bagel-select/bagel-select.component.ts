import { Component, OnInit } from '@angular/core';
import { BagelComponent } from './../bagel/bagel.component';
import { Bagel } from '../bagel';

@Component({
  selector: 'app-bagel-select',
  templateUrl: './bagel-select.component.html',
  styleUrls: ['./bagel-select.component.css']
})
export class BagelSelectComponent implements OnInit {

  bagels = [
    new Bagel('Whole Wheat', 3.50),
    new Bagel('White', 4.00),
    new Bagel('Poppy Seed', 4.00),
    new Bagel('Pumpkin', 5.00),
    new Bagel('Cinnamon', 5.00),
  ];

  constructor() { }

  ngOnInit() {
  }

}
