import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-circular',
  templateUrl: './edit-circular.component.html',
  styleUrls: ['./edit-circular.component.css']
})
export class EditCircularComponent implements OnInit {

  public singlecircular:any;
public arr:any=[];
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
    this.singlecircular=localStorage.getItem("selectedcircular");
    console.log(this.singlecircular);

    this.srv.editcircularadmin(this.singlecircular).subscribe((data)=>
    {
      this.arr=data;
      console.log(this.arr);
    })
  }

}

  