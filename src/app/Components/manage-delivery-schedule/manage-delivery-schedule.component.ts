import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Component({
  selector: 'app-manage-delivery-schedule',
  templateUrl: './manage-delivery-schedule.component.html',
  styleUrls: ['./manage-delivery-schedule.component.css']
})
export class ManageDeliveryScheduleComponent implements OnInit {
  users: any = [];
  istoken: any;
  constructor(public mngdelService: ServiceService) { }

  ngOnInit(): void {
    this.mngdelService.mngdelschedule().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }
  selecteddelivery(r: any) {
    localStorage.setItem("selectedDSID", r);
    console.log(localStorage.getItem("selectedDSID"));
    alert(localStorage.getItem("selectedDSID") + " is selected Delivery Schedule ID");
  }

  exportexcel(): void {

    //first way
    // Object.keys(this.apiData[0]).forEach((key) => {
    //   if ((key != 'sappoNo' && key != 'poDate' )) {
    //     delete this.apiData[0][key];
    //   }
    // });
    // this.exportecxel.exportAsExcelFile(this.apiData, 'sample');

    //second way[With Headers]
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('POSupplier');

    worksheet.columns = [
      { header: 'Purchase Order No', key: 'sappoNo', width: 30 },
      { header: 'Purchase Order Date', key: 'poDate', width: 32 },
      { header: 'Delivery Schedule No', key: 'delivaryScheduledNo' },
      { header: 'Delivery Schedule Date', key: 'deliveryScheduleDate' },
      { header: 'DS Updated Date', key: 'lastUpdatedDate' },
      { header: 'Schedule Type', key: '' },
    ];

    this.users.forEach((e: { sappoNo: any; poDate: Date; delivaryScheduledNo: any; deliveryScheduleDate: Date, lastUpdatedDate: Date }) => {
      worksheet.addRow({ sappoNo: e.sappoNo, poDate: e.poDate, delivaryScheduledNo: e.delivaryScheduledNo, deliveryScheduleDate: e.deliveryScheduleDate, lastUpdatedDate: e.lastUpdatedDate }, "n");
    });

    workbook.xlsx.writeBuffer().then((users) => {
      let blob = new Blob([users], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'DeliverySchedule.xlsx');
    })


    //third way[Without Headers]
    //  let element = document.getElementById('exporttab');
    //   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    // XLSX.writeFile(wb, this.fileName);
  }

}
