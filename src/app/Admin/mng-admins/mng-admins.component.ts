import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mng-admins',
  templateUrl: './mng-admins.component.html',
  styleUrls: ['./mng-admins.component.css']
})
export class MngAdminsComponent implements OnInit {
 istoken:any;
 header = new HttpHeaders();
  users: any=[];
  constructor(public mngadminsrv:ServiceService) { }

  ngOnInit(): void {
    this.mngadminsrv.mngadmin().subscribe((data)=>{
     this.users=data;
     console.log(data);
 })
}
  
 selectrow(uid:any){
   localStorage.setItem("selectedUserId",uid);
   console.log(uid);
   alert(uid+ "is selected userId")
 }
}
