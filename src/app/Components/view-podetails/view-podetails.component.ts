import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-view-podetails',
  templateUrl: './view-podetails.component.html',
  styleUrls: ['./view-podetails.component.css']
})
export class ViewPODetailsComponent implements OnInit {
  public singlepo: any;
  public users: any = [];
  //  public user:any=[];
  public istoken: any;
  constructor(public viewposervice: ServiceService) { }

  ngOnInit(): void {
    this.singlepo = localStorage.getItem("selectedPOID");
    // console.log(this.singlepo);
    this.viewposervice.viewPOdetailsbyPOID(this.singlepo).subscribe((data) => {
      // console.log(this.singlepo);
      this.users = data;
      console.log(this.users);
    })
  }

}
