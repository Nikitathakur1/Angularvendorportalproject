import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-mng-delivery-schedule',
  templateUrl: './mng-delivery-schedule.component.html',
  styleUrls: ['./mng-delivery-schedule.component.css']
})
export class MngDeliveryScheduleComponent implements OnInit {

users:any=[];
 istoken:any;
  constructor(public mngdelService:ServiceService) { }

  ngOnInit(): void {
    this.mngdelService.mngdelschedule().subscribe((users)=>{
      this.users=users;
      console.log(users);
    });
  }
  selecteddelivery(r:any){
    localStorage.setItem("selectedDSID",r);
    console.log(localStorage.getItem("selectedDSID"));
    alert(localStorage.getItem("selectedDSID")+" is selected Delivery Schedule ID");
  }
  //  adddelivery(a:any){
  //   localStorage.setItem("addDSID",a);
  //   console.log(localStorage.getItem("addDSID"));
  //   alert(localStorage.getItem("addDSID")+" is add Delivery Schedule ID");
  // }
  
  print(){
    window.print();
  }

  exportexcel()
  {

  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('MngDeliveryScheuleAdmin');
 
  worksheet.columns = [
    { header: 'Supplier Name', key: 'supplier', width: 30 },
     { header: 'Purchase Order No', key: 'sappoNo', width: 30 },
    { header: 'Purchase Order Date ', key: 'poDate', width: 32 },
    { header: ' Delivery Schedule No', key: 'dsMainID', width: 30 },
    { header: 'Delivery Schedule Date', key: 'dsEnteredDate', width: 30 },
    { header: 'Created Date', key: 'createdDate', width: 30 },
    { header: 'Last Updated Date', key: 'modifiedDate', width: 30},
    { header: 'Schedule Type', key: 'deliveryScheduleType', width: 32 },
  ];
 
  this.users.forEach((e: { supplier: any;  sappoNo: any; poDate:any; dsMainID:any; dsEnteredDate:any; createdDate:any; modifiedDate:any; deliveryScheduleType:any }) => {
    worksheet.addRow({supplier: e.supplier,sappoNo: e.sappoNo, poDate: e.poDate, dsMainID: e.dsMainID, dsEnteredDate:e.dsEnteredDate, createdDate: e.createdDate, modifiedDate: e.modifiedDate, deliveryScheduleType: e.deliveryScheduleType},"n");
  });
 
  workbook.xlsx.writeBuffer().then((users) => {
    let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'MngDeliveryScheuleAdmin.xlsx');
  })
  }

}

