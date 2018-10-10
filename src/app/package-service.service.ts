import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {

  constructor(private httpServ: HttpClient) {
    console.log('okkkkkk');
  }

  getPackage() {
    return this.httpServ.get('http://late-glade-8787.getsandbox.com/packages');
  }

  addPackage(newPackage) {
    this.httpServ.post('http://late-glade-8787.getsandbox.com/packages', newPackage).subscribe(
      data => {
        console.log("OKKKKKKKK", data);
        return data;
      },
      error => {
          console.log("Error", error);
      }
    );
  }
}
