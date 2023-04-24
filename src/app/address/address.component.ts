import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormGroup } from '@angular/forms';
import { DropdownService } from '../dropdown.service';
 


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent   {  
//   constructor(public service:CommonService) {  
// }  
countryList:any=[];
cityList:any=[];
stateList:any=[];
id:any;
dropDownForm!: FormGroup;

constructor(private dropdownService: DropdownService, private fb: FormBuilder){}

ngOnInit() {
  
  this.dropDownForm = this.fb.group({
    country: [''],
    state:[''],
    city:[''],
  });
  this.dropdownService.getAllCountry().subscribe(countryList=>{
    this.countryList = countryList;
   
  });


}
GetStateById(event: any){
  
  console.log(event);
  let cid= event.target.value;
  cid=cid.split(':',1);
  
  this.dropdownService.getStateByCountry(cid).subscribe(stateList => {
  
    this.stateList = stateList;
    // console.log(this.stateList);
  });    
}
GetCityById(event: any){
  console.log(event);
  let sid= event.target.value;
  sid=sid.split(':',1);
  this.dropdownService.getCityByState(sid).subscribe(cityList => {
    this.cityList = cityList;
    console.log(this.cityList);
  });
}
}
   