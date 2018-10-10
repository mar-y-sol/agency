import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'package-data',
  templateUrl: './packages-data.component.html',
  styleUrls: ['./packages-data.component.css']
})
export class PackagesDataComponent implements OnInit {
  @Input() package;
  /*name: string;
  description: string;
  price: number;
  departureDate: string;
  arriveDate: string;
  googleLocation: string;*/

  constructor() {
    /*this.name = this.package.name;
    this.description = this.package.description;
    this.price = this.package.price;
    this.departureDate = this.package.departureDate;
    this.arriveDate = this.package.arriveDate;
    this.googleLocation = this.package.googleLocation;*/
  }

  ngOnInit() {
  }

}
