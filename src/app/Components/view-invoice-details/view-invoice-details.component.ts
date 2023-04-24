import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-invoice-details',
  templateUrl: './view-invoice-details.component.html',
  styleUrls: ['./view-invoice-details.component.css']
})
export class ViewInvoiceDetailsComponent implements OnInit {
  public inv: any = [];
  public invid: any;

  constructor(public srv: ServiceService) { }

  ngOnInit(): void {





    this.invid = localStorage.getItem("invoiceid");
    console.log(this.invid);
    this.srv.viewinvoice(this.invid).subscribe((data) => {
      this.inv = data;
      console.log(this.inv);
    })
  }


}
