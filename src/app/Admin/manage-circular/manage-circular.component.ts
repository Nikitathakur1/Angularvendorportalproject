
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-circular',
  templateUrl: './manage-circular.component.html',
  styleUrls: ['./manage-circular.component.css']
})
export class ManageCircularComponent implements OnInit {
public circular:any=[];
// public datePipeString:any;
  constructor(public mngcircularsrv:ServiceService) { }

  ngOnInit(): void {
  this.mngcircularsrv.mngcircularadmin().subscribe((data)=>{
    this.circular=data;
    console.log(this.circular);
  })
  }
   viewcircularadmin(cid:any){
    alert(cid+" is selected circular");
    localStorage.setItem("selectedcircular",cid);
    console.log(localStorage.getItem("selectedcircular"));
    
  }

  editcircularadmin(cid:any){
    alert(cid+" is selected circular");
    localStorage.setItem("selectedcircular",cid);
    console.log(localStorage.getItem("selectedcircular"));
  }

}
