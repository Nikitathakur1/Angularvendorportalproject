import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {
public inv:any=[];
public invid:any;
  constructor(public srv:ServiceService) { }
  ngOnInit(): void {
  this.invid=localStorage.getItem("invoiceid");
  console.log(this.invid);
    this.srv.viewinvoiceadmin(this.invid).subscribe((data)=>{
      this.inv=data;
      console.log(this.inv);
    })
  }
  }

