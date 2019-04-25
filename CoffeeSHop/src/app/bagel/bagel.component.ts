import { Component, OnInit, Input } from '@angular/core';
import { Bagel } from './../bagel';
import { Router, RouterLink } from '@angular/router';
import { DataSingleton } from '../data-singleton';

@Component({
  selector: 'app-bagel',
  templateUrl: './bagel.component.html',
  styleUrls: ['./bagel.component.scss']
})
export class BagelComponent implements OnInit {

  @Input() bagel: Bagel;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onClick() {
    DataSingleton.selectedBagel = this.bagel;
    this.router.navigateByUrl('/bagel-customize');
  }

}
