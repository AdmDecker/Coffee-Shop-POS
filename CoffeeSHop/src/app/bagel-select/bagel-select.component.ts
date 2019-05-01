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
    new Bagel('Whole Wheat', 12.00),
    new Bagel('White', 11.00),
    new Bagel('Poppy Seed', 12.00),
    new Bagel('Pumpkin', 13.00),
    new Bagel('Cinnamon', 14.00),
  ];

  constructor() { }

  ngOnInit() {
  }

}
