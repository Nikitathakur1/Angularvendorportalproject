import { HttpHeaders } from '@angular/common/http';
import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mng-suppliers',
  templateUrl: './mng-suppliers.component.html',
  styleUrls: ['./mng-suppliers.component.css']
})
export class MngSuppliersComponent implements OnInit {
  header =new HttpHeaders();
public allvendor:any=[];
public scode:any;
public sname:any;
  constructor(public srv:ServiceService) { }

  ngOnInit(): void {

   this.getsupplier();
  }

 getsupplier(){
  this.srv.fetchallvendor().subscribe((data)=>{
    this.allvendor=data;
    console.log(this.allvendor);
  })
 }
 clickbox(){
  this.getsupplier();
 }
  serchsupplier(){
    if(this.scode){
      this.allvendor=this.allvendor.filter((mngsp:any)=>{
        return mngsp.sapVendorCode.match(this.scode);
      });
      this.scode=null;
    }
    else if(this.sname){
      this.allvendor=this.allvendor.filter((mngsp:any)=>{
        return mngsp.sapVendorName.match(this.sname);
      });
      this.sname=null;
    }
    
    // else if(this.scode==null){
    //   this.getsupplier();
    // }
    else{
      this.getsupplier();
    }
  }
  disablesupplier(vid:any){
    //  this.srv.disabledsupplier(vid).subscribe(()=>{
    //   console.log(vid);
    //  })
   
  console.log(vid);
    alert(vid);
    
  }

   selectrow(r:any){
     localStorage.setItem("selectedLoginId",r);
     console.log(r);
     alert(r +"is selected LoginId");
   }
  
 
  }



