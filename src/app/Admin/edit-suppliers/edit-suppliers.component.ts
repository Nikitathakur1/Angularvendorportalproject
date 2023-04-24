import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent implements OnInit {
 
  public singlesupplier:any;
public data:any=[];
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
    this.singlesupplier=localStorage.getItem("selectedLoginId");
    console.log(this.singlesupplier);

    this.srv.editsupplier(this.singlesupplier).subscribe((data)=>
    {
      this.data=data;
      console.log(this.data);
    })
  }

}
