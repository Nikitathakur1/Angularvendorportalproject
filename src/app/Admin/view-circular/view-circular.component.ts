import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-circular',
  templateUrl: './view-circular.component.html',
  styleUrls: ['./view-circular.component.css']
})
export class ViewCircularComponent implements OnInit {
public singlecircular:any;
public arr:any=[];
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {
    this.singlecircular=localStorage.getItem("selectedcircular");
    console.log(this.singlecircular);

    this.srv.viewcircularadmin(this.singlecircular).subscribe((data)=>
    {
      this.arr=data;
      console.log(this.arr);
    })
  }

}
