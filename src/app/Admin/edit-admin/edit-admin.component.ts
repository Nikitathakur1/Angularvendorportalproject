import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

   public singleuser:any;
   public users:any=[];
 
  constructor(public editadmin:ServiceService) { }

  ngOnInit(): void {
    this.singleuser= localStorage.getItem("selectedUserId");
    console.log(this.singleuser);
  this.editadmin.edituser(this.singleuser).subscribe((data)=>{
    this.users=data;
    console.log(this.users);
  })
  }

}


