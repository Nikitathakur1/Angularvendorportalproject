import  * as XLSX  from 'xlsx';
import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-mng-invoice-details',
  templateUrl: './mng-invoice-details.component.html',
  styleUrls: ['./mng-invoice-details.component.css']
})
export class MngInvoiceDetailsComponent implements OnInit {
invoice:any=[];
istoken:any;
  constructor(public mnginviceadminsrv:ServiceService){ }

  ngOnInit(): void {
    this.mnginviceadminsrv.mnginvoiceadmin().subscribe((data)=>{
      this.invoice=data;
      console.log(this.invoice);
   
    })
  }

  viewinvoiceadmin(invid:any)
  {
    localStorage.setItem("invoiceid",invid);
    console.log(localStorage.getItem("invoiceid"));
    alert(invid+"is selected invoice ID");
  }

  print(){
    window.print();
  }
  exportexcel()
  {
    
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('MngInvoiceDetails');
 
  worksheet.columns = [
   // { header: 'Supplier Code', key: 'firstName', width: 30 },
    //{ header: 'Supplier Name ', key: 'lastName', width: 32 },
    { header: 'Purchase Order No.', key: 'invoicePOId', width: 30 },
    { header: 'Invoice No.', key: 'invoiceNo', width: 30 },
    { header: 'Invoice Date', key: 'invoiceDate', width: 30 },
    //{ header: 'Invoice Details', key: 'viewpo', width: 30}
    //  { header: 'Delete ', key: 'action', width: 32 },
  ];
 
  this.invoice.forEach((e: { invoicePOId:any;invoiceNo: any; invoiceDate: any}) => {
    worksheet.addRow({ invoicePOId: e.invoicePOId, invoiceNo: e.invoiceNo, invoiceDate :e.invoiceDate},"n");
  });
 
  workbook.xlsx.writeBuffer().then((users) => {
    let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'MngInvoiceDetails.xlsx');
  })
  }

  }

