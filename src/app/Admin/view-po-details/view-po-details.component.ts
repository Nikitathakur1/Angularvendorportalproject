import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-po-details',
  templateUrl: './view-po-details.component.html',
  styleUrls: ['./view-po-details.component.css']
})
export class ViewPoDetailsComponent implements OnInit {
  public singlepo:any;
 public users:any=[];
//  public user:any=[];
 public istoken:any;
  constructor(public viewposervice:ServiceService) { }

  ngOnInit(): void {
    this.singlepo= localStorage.getItem("selectedPOId");
    console.log(this.singlepo);
  this.viewposervice.viewPOdetails(this.singlepo).subscribe((data)=>{
    // console.log(this.singlepo);
    this.users=data;
    console.log(this.users);
  })
  }

}