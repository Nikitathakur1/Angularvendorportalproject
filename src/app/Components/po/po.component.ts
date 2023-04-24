import { Router } from '@angular/router';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { ExportToExcelService } from 'src/app/export-to-excel.service';
@Component({
  selector: 'app-po',
  templateUrl: './po.component.html',
  styleUrls: ['./po.component.css']
})

export class POComponent implements OnInit {
  istoken: any;
  fileName: any = "POExcelSheet.xlsx";
  //  headers=new Headers();
  header = new HttpHeaders();
  apiData: any;

  constructor(public poservice: ServiceService, public exportecxel: ExportToExcelService, public router: Router) {
    this.poservice.fetchPOUser().subscribe((users) => {
      this.apiData = users;
      console.log(this.apiData);
    });
  }

  ngOnInit(): void {
    this.istoken = localStorage.getItem("token");

  }

  exportexcel(): void {


    //second way[With Headers]
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('POSupplier');

    worksheet.columns = [
      { header: 'PO No', key: 'sappoNo', width: 30 },
      { header: 'PO Date', key: 'poDate', width: 32 },
      { header: 'View PO Details', key: '' }
    ];

    this.apiData.forEach((e: { sappoNo: any; poDate: Date }) => {
      worksheet.addRow({ sappoNo: e.sappoNo, poDate: e.poDate }, "n");
    });

    workbook.xlsx.writeBuffer().then((users) => {
      let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'POSupplier.xlsx');
    })



  }

  selectrow(r: any) {
    // debugger;
    localStorage.setItem("selectedPOID", r);
    console.log(r);
    alert(r + " is selected POID");
  }



}
