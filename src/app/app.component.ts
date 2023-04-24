import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Country } from './model/country.model';

import { City } from './model/city.model';
import { State } from './model/state.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VendorAppPro';
  headers=new Headers();
  header = new HttpHeaders();
  // this.headers.append('Access-Control-Allow-Origin', '*');
  // this.header.set('Access-Control-Allow-Origin', '*');

  listcountry!: Country[]
  countrySelected! : string
  listState!: State[]
  selectedState!: string
  listCity! : City[]
  
}
