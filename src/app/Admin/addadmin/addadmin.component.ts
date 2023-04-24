import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  users: any=[];
  constructor(public mngadminsrv:ServiceService) { }

  ngOnInit(): void {
    this.mngadminsrv.mngsupplier().subscribe((data)=>{
     this.users=data;
     console.log(data);
 })
}
}
