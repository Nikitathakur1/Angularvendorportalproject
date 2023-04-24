import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ServiceService } from 'src/app/service.service';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-manage-invoice-details',
  templateUrl: './manage-invoice-details.component.html',
  styleUrls: ['./manage-invoice-details.component.css']
})
export class ManageInvoiceDetailsComponent implements OnInit {
  invoice: any = [];
  istoken: any;
  constructor(public mnginvoiceservice: ServiceService) { }

  ngOnInit(): void {
    this.mnginvoiceservice.mnginvoice().subscribe((data) => {
      this.invoice = data;
      console.log(this.invoice);
    })
  }
  viewinvoice(invid: any) {
    localStorage.setItem("invoiceid", invid);
    console.log(localStorage.getItem("invoiceid"));
    alert(invid + " is selected invoice ID");
  }

  exportexcel() {
    // alert("..");

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('POSupplier');

    worksheet.columns = [
      { header: 'Purchase_Order_No', key: 'purchaesOrderNo', width: 30 },
      { header: 'Invoice_No', key: 'invoiceNo', width: 32 },
      { header: 'Invoice_Date', key: 'invoiceDate' },
      { header: 'Edit_Invoice_detail', key: 'dsEnteredDate' },
      { header: 'Invoice_Details', key: '' },
      { header: 'Generate_Bar_code', key: '' },
    ];

    this.invoice.forEach((e: { purchaesOrderNo: any; invoiceNo: any; invoiceDate: any }) => {
      worksheet.addRow({ purchaesOrderNo: e.purchaesOrderNo, invoiceNo: e.invoiceNo, invoiceDate: e.invoiceDate }, "n");
    });

    workbook.xlsx.writeBuffer().then((users) => {
      let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'ManageInvoiceSupplier.xlsx');
    })
  }
}
