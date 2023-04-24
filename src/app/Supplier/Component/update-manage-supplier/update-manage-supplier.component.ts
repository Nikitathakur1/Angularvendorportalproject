import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageSupplierServiceService } from 'src/app/manage-supplier-service.service';
import { ManageSupplier } from 'src/app/model/manage-supplier';

@Component({
  selector: 'app-update-manage-supplier',
  templateUrl: './update-manage-supplier.component.html',
  styleUrls: ['./update-manage-supplier.component.css']
})
export class UpdateManageSupplierComponent implements OnInit {
  managesupplier : ManageSupplier[] = [];
  managesuppliertoedit?:ManageSupplier;
  @Input() mg?:ManageSupplier
  
 AddManageRequest: ManageSupplier={
   supplierName: "",
   emailID: '',
   supplierID: 0,
   city: '',
   agentName: '',
   phoneNumber: 0
 };
  constructor(private fb : FormBuilder ,public MngSupplier:ManageSupplierServiceService,private route:ActivatedRoute) { }

  ngOnInit():void{
  this.route.paramMap.subscribe({
    next:(params)=>{
 const SupplierID= params.get('SupplierID');
 if(SupplierID){
    this.MngSupplier.getManageSupplier(SupplierID).subscribe({
      next:(response)=>{
        this.AddManageRequest=response
      }
    })
    }
  }
  })
  }   
 UpdateManageSupplier(){
   this.MngSupplier.updateManageSupplier(this.AddManageRequest.supplierID, this.AddManageRequest ).subscribe({
    next:(response)=>{
    
    }
   });
  console.log(this.AddManageRequest);
  }

  addmanageSupplier(){
    this.MngSupplier.addManageSupplier(this.AddManageRequest).subscribe({
      next:(managesupplier)=>{
        console.log(managesupplier);
      }
    });
  }
}








