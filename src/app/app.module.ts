import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { ListPackagesComponent } from './list-packages/list-packages.component';
import { PackagesDataComponent } from './packages-data/packages-data.component';

import { PackageServiceService } from './package-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPackageComponent,
    ListPackagesComponent,
    PackagesDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PackageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
