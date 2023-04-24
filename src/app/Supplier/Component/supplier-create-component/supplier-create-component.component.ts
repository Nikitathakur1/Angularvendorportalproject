import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DropdownService } from 'src/app/dropdown.service';
import { ManageSupplierServiceService } from 'src/app/manage-supplier-service.service';
import { ManageSupplier } from 'src/app/model/manage-supplier';
import { UpdateManageSupplierComponent } from '../update-manage-supplier/update-manage-supplier.component';

@Component({
  selector: 'app-supplier-create-component',
  templateUrl: './supplier-create-component.component.html',
  styleUrls: ['./supplier-create-component.component.css']
})
export class SupplierCreateComponentComponent implements OnInit {
  managesuppliers : ManageSupplier= new ManageSupplier();
  managesupplier : ManageSupplier[] = [];
  
  constructor(public MngSupplier:ManageSupplierServiceService ,private fb: FormBuilder) { }
  
  ngOnInit():void {
  
    this.MngSupplier.getAllManageSuppliers().subscribe({
      next:(managesupplier)=>{
        console.log(managesupplier);
        this.managesupplier= managesupplier;
      },
      error:(response)=>{
        console.log(response);
      }
     })
  
  }
  onSubmit(form:NgForm):void{
    console.log(form.value)
  }
 
}





