import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';

import * as fs from 'file-saver';
@Component({
  selector: 'app-viewschedulesupplier',
  templateUrl: './viewschedulesupplier.component.html',
  styleUrls: ['./viewschedulesupplier.component.css']
})
export class ViewschedulesupplierComponent implements OnInit {
  public singledelivery: any;
  public users1: any = [];
  constructor(public viewdeliveryserv: ServiceService) { }
  ngOnInit(): void {
    this.singledelivery = localStorage.getItem("selectedDSID");
    // console.log(this.singledelivery);
    this.viewdeliveryserv.viewdelivery(this.singledelivery).subscribe((data) => {
      this.users1 = data;
      console.log(this.users1);
    })
  }
  exportexcel() {
    // alert("....");
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('POSupplier');

    worksheet.columns = [
      { header: 'Material Code', key: 'materialCode', width: 30 },
      { header: 'Material Desciption', key: 'materialDescription', width: 32 },
      { header: 'Unit', key: 'unit' },

    ];

    this.users1.forEach((e: { materialCode: any; materialDescription: any; unit: any }) => {
      worksheet.addRow({ materialCode: e.materialCode, materialDescription: e.materialDescription, unit: e.unit }, "n");
    });

    workbook.xlsx.writeBuffer().then((users: BlobPart) => {
      let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'ViewScheduleSupplier.xlsx');
    })

  }
}
