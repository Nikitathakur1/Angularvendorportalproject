import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcircular',
  templateUrl: './viewcircular.component.html',
  styleUrls: ['./viewcircular.component.css']
})
export class ViewcircularComponent implements OnInit {
  public singlecircular: any;
  public arr: any = [];
  constructor(public srv: ServiceService) { }

  ngOnInit(): void {
    this.singlecircular = localStorage.getItem("selectedcircular");
    console.log(this.singlecircular);

    this.srv.viewcircular(this.singlecircular).subscribe((data) => {
      this.arr = data;
      console.log(this.arr);
    })
  }

}
