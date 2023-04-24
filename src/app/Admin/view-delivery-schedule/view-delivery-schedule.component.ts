import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-view-delivery-schedule',
  templateUrl: './view-delivery-schedule.component.html',
  styleUrls: ['./view-delivery-schedule.component.css']
})
export class ViewDeliveryScheduleComponent implements OnInit {

  public singledelivery:any;
  public users:any=[];
  constructor(public viewdeliveryserv:ServiceService) { }
  ngOnInit(): void {
    this.singledelivery=localStorage.getItem("selectedDSID");
    console.log(this.singledelivery);
    this.viewdeliveryserv.viewdeliveryadmin(this.singledelivery).subscribe((data)=>{
      this.users=data;
      console.log(this.users);
    })
  }
 exportexcel()
  {
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('ViewDeliveryScheuleAdmin');
 
  worksheet.columns = [
    { header: 'Material Desciption', key: 'materialDescription', width: 30 },
     { header: 'Material Code', key: 'materialCode', width: 30 },
    { header: 'Unit', key: 'unit', width: 32 },
  ];
 
  this.users.forEach((e: { materialDescription: any;  materialCode: any; unit: any}) => {
    worksheet.addRow({materialDescription: e.materialDescription,materialCode: e.materialCode, unit: e.unit},"n");
  });
 
  workbook.xlsx.writeBuffer().then((users) => {
    let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'ViewDeliveryScheuleAdmin.xlsx');
  })
  }

}

