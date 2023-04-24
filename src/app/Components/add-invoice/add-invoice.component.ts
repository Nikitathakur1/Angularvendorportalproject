import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  public inv: any = [];
  public invid: any;
  public selectedPO: any;
  public selectedDS: any;
  public searchpo: any = 0;
  public searcharr: any = [];
  public allpos: any = [];
  public alldel: any = [];
  addinvoiceform: any = FormGroup;
  // arrval=[2123,2929];
  constructor(public srv: ServiceService) { }

  ngOnInit(): void {
    this.srv.fetchallpo().subscribe((data) => {
      this.allpos = data;
      console.log("All POS : " + this.allpos);
      this.selectedPO = this.allpos[0].sappoNo;
      this.searchpo = this.allpos[0].sappoNo
      this.srv.fetchalldel().subscribe((data) => {
        this.alldel = data;
        console.log("All Delivery : " + this.alldel);
      })



      this.addinvoiceform = new FormGroup({
        invno: new FormControl('', [Validators.required]),
        invdate: new FormControl('', [Validators.required]),
        csgnname: new FormControl('', [Validators.required]),
        transnm: new FormControl('', [Validators.required]),
        modetrans: new FormControl('', [Validators.required]),
        vehicleno: new FormControl('', [Validators.required]),
        cntvat: new FormControl('', [Validators.required]),
        servtax: new FormControl('', [Validators.required]),
        packets: new FormControl('', [Validators.required]),
        qty: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        edcspercent: new FormControl('', [Validators.required]),
        edcs: new FormControl('', [Validators.required]),
        shecesspercent: new FormControl('', [Validators.required]),
        shecess: new FormControl('', [Validators.required]),
        vatpercent: new FormControl('', [Validators.required]),
        vat: new FormControl('', [Validators.required]),
        totalqty: new FormControl('', [Validators.required]),
        totalamt: new FormControl('', [Validators.required]),
        matcode: new FormControl('', [Validators.required]),
        matdesc: new FormControl('', [Validators.required])
      })
    })


    this.invid = localStorage.getItem("invoiceid");
    console.log(this.invid);
    this.srv.viewinvoice(this.invid).subscribe((data) => {
      this.inv = data;
      console.log(this.inv);
    })
  }

  adinvoiceform() {
    let body = {
      invoiceNo: this.addinvoiceform.value.invno,
      invoiceDate: this.addinvoiceform.value.invdate,
      nameOfConsignee: this.addinvoiceform.value.csgnname,
      transporterName: this.addinvoiceform.value.transnm,
      modeOfTransport: this.addinvoiceform.value.modetrans,
      vehicleNo: this.addinvoiceform.value.vehicleno,
      cenvat: this.addinvoiceform.value.cntvat,
      edCess: this.addinvoiceform.value.edcs,
      sheCess: this.addinvoiceform.value.shecess,
      sTax: this.addinvoiceform.value.servtax,
      materialCode: this.addinvoiceform.value.matcode,
      materialDescription: this.addinvoiceform.value.matdesc,
      noOfPKTS: this.addinvoiceform.value.packets,
      totalQuantityDespatched: this.addinvoiceform.value.totalqty,
      pricePerUnit: this.addinvoiceform.value.price,
      totalInvoiceAmount: this.addinvoiceform.value.totalamt

    }
    // alert("Add Invoice");
    // console.log(body);
    // console.log(body);
    this.addinvoiceform.reset();
    this.srv.addinvoice(body).subscribe(data => {
      this.inv = data;
      console.log("Service call " + this.inv);
    })
  }

  serachpo() {
    this.searchpo = this.selectedPO;
  }
  changeevent(e: any) {
    this.selectedPO = e.target.value;
    console.log(this.selectedPO);
  }
  changeev(e: any) {
    this.selectedDS = e.target.value;
    console.log(this.selectedDS);
  }


}
