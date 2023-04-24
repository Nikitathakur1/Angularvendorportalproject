import { ServiceService } from 'src/app/service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-managecircular',
  templateUrl: './managecircular.component.html',
  styleUrls: ['./managecircular.component.css']
})
export class ManagecircularComponent implements OnInit {
  public circular: any = [];
  public datePipeString: any;
  constructor(public srv: ServiceService) { }

  ngOnInit(): void {
    // this.datePipeString = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
    // console.log(this.datePipeString);

    this.srv.mngcircularmain().subscribe((data) => {
      this.circular = data;
      console.log(this.circular);
    })
  }
  viewcircular(cid: any) {
    alert(cid + " is selected circular");
    localStorage.setItem("selectedcircular", cid);
    console.log(localStorage.getItem("selectedcircular"));
  }

}
