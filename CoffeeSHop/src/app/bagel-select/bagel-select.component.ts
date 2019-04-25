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
    new Bagel('Bagel1', 12),
    new Bagel('Bagel2', 13),
  ];

  constructor() { }

  ngOnInit() {
  }

}
