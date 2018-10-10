import { Component, OnInit, Input } from '@angular/core';
import { PackageServiceService} from './../package-service.service'

@Component({
  selector: 'list-packages',
  templateUrl: './list-packages.component.html',
  styleUrls: ['./list-packages.component.css']
})
export class ListPackagesComponent implements OnInit {
  agencyTitle:string = 'UMSS';
  titles: string [];
  packages;
  constructor(private packService: PackageServiceService) {
    this.packService.getPackage().subscribe(data => {
      this.packages = data;
      
    });
    this.titles = this.getTitles(this.packages);
   }

  getTitles(packages):string[] {
    return ['Name','Description','Price', 'Departure Date', 'Arrive Date', 'Google Location'];
  } 
  
  ngOnInit() {
  }

}
