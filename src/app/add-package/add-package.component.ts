import { Component, OnInit, Input } from '@angular/core';

import { PackageServiceService } from './../package-service.service';

@Component({
  selector: 'add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  @Input() package;
  currentPackage;
  constructor(private packService: PackageServiceService) {
    this.currentPackage = {
      name: '',
      description: '',
      price: '',
      departureDate: '',
      arriveDate: '',
      googleLocation: ''
    };
    
    this.packService.getPackage().subscribe(data => {
      //console.log(data);
    });
  }

  addPackages(currentPackage) {
    this.packService.addPackage(currentPackage);
  }
  ngOnInit() {
  }

}
