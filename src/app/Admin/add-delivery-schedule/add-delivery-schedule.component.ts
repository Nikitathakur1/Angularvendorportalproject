import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-delivery-schedule',
  templateUrl: './add-delivery-schedule.component.html',
  styleUrls: ['./add-delivery-schedule.component.css']
})
export class AddDeliveryScheduleComponent implements OnInit {

  public singledelivery:any;
  public users1:any=[];
  constructor(public adddeliveryserv:ServiceService) { }
  ngOnInit(): void {
    this.singledelivery=localStorage.getItem("addDSID");
    console.log(this.singledelivery);
    this.adddeliveryserv. adddeliveryadmin(this.singledelivery).subscribe((data)=>{
      this.users1=data;
      console.log(this.users1);
    })
  }

}

