import { HttpHeaders } from '@angular/common/http';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
// import * as XLSX from 'xlsx';

import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
    header = new HttpHeaders();
  users: any=[];

  // fileName= 'ExcelSheet.xlsx';
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
    this.srv.poadmin().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
    })
  }

  selectrow(r:any){
    localStorage.setItem("selectedPOId",r);
    console.log(r);
    alert(r+"is selected POId");
  }
  print(){
    window.print();
  }
  exportexcel()
  {
     /* pass here the table id */
    // let element = document.getElementById('exceltable');
    // const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
     /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
     /* save to file */  
     //XLSX.writeFile(wb, this.fileName);


  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('POAdmin');
 
  worksheet.columns = [
    //{ header: 'Supplier Code', key: 'id', width: 30 },
    //{ header: 'Supplier Name ', key: 'name', width: 32 },
    //{ header: 'Email ID', key: 'email', width: 30 },
      { header: 'PO Id', key: 'poId', width: 30 },
    { header: 'PO Date', key: 'poDate', width: 30 },
    //{ header: 'View PO Details', key: 'viewpo', width: 30}
    //  { header: 'Action ', key: 'action', width: 32 },
  ];
 
  this.users.forEach((e: { poId: any;  poDate: any}) => {
    worksheet.addRow({poId: e.poId,poDate: e.poDate},"n");
  });
 
  workbook.xlsx.writeBuffer().then((users) => {
    let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'POAdmin.xlsx');
  })
  }

}
