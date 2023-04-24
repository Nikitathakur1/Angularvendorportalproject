import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers=new HttpHeaders();
  header=new HttpHeaders();
  // options = {
  //   headers: new HttpHeaders()
  //     .set("Content-Type", "application/json")
  //     // .set("x-app-id", this.appId)
  //     // .set("x-app-key", this.appKey)
  //     .set("observe","response")
  // };
  public vid:any=sessionStorage.getItem("VendorID");
  token=localStorage.getItem("token");
  constructor(public http:HttpClient) { }

  
  login(user:any){
    // alert("Service Calling");
    this.header.append("Access-Control-Allow-Origin","http://local.mydomain.example:4200");
    // console.log(user);
    return this.http.post("https://localhost:44356/api/Account/authenticate/",user,
    {
            headers:{
              'Content-Type': 'application/json',
              // 'Accept': '*',
              // 'Access-Control-Allow-Origin': '*',
              "Access-Control-Allow-Headers":"content-type",
            }
      }
    );
  }
  registerUser(user:any){
    //alert("Service Calling");
    console.log("In Service : "+user);
return this.http.post("https://localhost:44356/api/Account/register",user,
 {
      headers:{
    "Content-Type":"application/json",
    // 'Accept': '*',
    // 'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers":"content-type",
  //   "Authorization": `Bearer ${this.token}`
       }
       } );
}

  fetchPOUser(){
    console.log(this.token);
    this.header.append("Access-Control-Allow-Origin","http://local.mydomain.example:4200");
    return this.http.get('https://localhost:44356/api/v1/PO'
    // +this.vid,
    // {
    //       headers:{
    //     "Content-Type":"application/json",
    //     "Accept":"application/json",
    //     "Access-Control-Allow-Headers":"content-type",
    //     "Authorization": `Bearer ${this.token}`
    //       }
    // }
    );
  }

  viewPOdetailsbyPOID(poid:any){
    console.log(poid+" is selected POID in service");
    return this.http.get('https://localhost:44356/api/v1/PO/'+poid,
  //   {
  //     headers:{
  //   "Content-Type":"application/json",
  //   "Accept":"application/json",
  //   "Access-Control-Allow-Headers":"content-type",
  //   "Authorization": `Bearer ${this.token}`
  //     }
  // }
  );
  }

  mngdelschedule(){
    
    return this.http.get('https://localhost:44356/api/v1/DeliverySchedule/'
  //   +this.vid,
  //   {
  //     headers:{
  //   "Content-Type":"application/json",
  //   "Accept":"application/json",
  //   "Access-Control-Allow-Headers":"content-type",
  //   "Authorization": `Bearer ${this.token}`
  //     }
  // }
  );
  }

  viewdelivery(dsid:any){
    console.log(dsid);
    return this.http.get('https://localhost:44356/api/v1/DeliverySchedule/'+dsid,
    // {
    //   headers:{
    // "Content-Type":"application/json",
    // "Accept":"application/json",
    // "Access-Control-Allow-Headers":"content-type",
    // "Authorization": `Bearer ${this.token}`
    //   }
    // }
    );
  }

 mngcircularmain(){
  return this.http.get('https://localhost:44341/BashPath/CMain/'+this.vid,
  {
    headers:{
  "Content-Type":"application/json",
  "Accept":"application/json",
  "Access-Control-Allow-Headers":"content-type",
  "Authorization": `Bearer ${this.token}`
    }
  }
  );
 }

  viewcircular(cid:any){
    return this.http.get('https://localhost:44341/BashPath/CDetail/'+cid,
    
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }

  mnginvoice(){
    // https://localhost:44341/BasePath/InvoiceMains/
    return this.http.get('https://localhost:44356/api/Invoice'
    // +this.vid,
    // {
    //   headers:{
    // "Content-Type":"application/json",
    // "Accept":"application/json",
    // "Access-Control-Allow-Headers":"content-type",
    // "Authorization": `Bearer ${this.token}`
    //   }
    // }
    );
  }

  viewinvoice(invid:any)
  {
    // https://localhost:44341/BasePath/InvoiceDetails/
    return this.http.get('https://localhost:44356/api/Invoice/'
    +invid,
    // {
    //   headers:{
    // "Content-Type":"application/json",
    // "Accept":"application/json",
    // "Access-Control-Allow-Headers":"content-type",
    // "Authorization": `Bearer ${this.token}`
    //   }
    // }
    );
  }
 addinvoice(addinv:any){
  alert("Invoice Added successfully ....");
  console.log(addinv);
  return this.http.post('https://localhost:44356/api/InvoiceSupplier/',addinv,
  {
    headers:{
  "Content-Type":"application/json",
  "Access-Control-Allow-Headers":"content-type",
  // "Accept":"application/json",
    }
  }
  );
 
 }
 fetchalldel(){
  return this.http.get('https://localhost:44356/api/v1/DeliverySchedule/' );
 }

  fetchallpo(){
    return this.http.get('https://localhost:44356/api/v1/PO'    );
  }
  fetchallvendor(){
    return this.http.get("https://localhost:44341/BasePath/AllVendor",
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    )
  }
  disabledsupplier(id:any){
   return this.http.get("https://localhost:44341/BasePath/AllVendor/"+id); 
  }

  mngsupplier(){
     return this.http.get('https://localhost:44341/BasePath/User');
  }

   editsupplier(id:any){
   return this.http.get("https://localhost:44341/BasePath/AllVendor/"+id,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
   }

  poadmin(){
      return this.http.get('https://localhost:44341/BasePath/POMain',
      {
        headers:{
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Access-Control-Allow-Headers":"content-type",
      "Authorization": `Bearer ${this.token}`
        }
      });
  }

    viewPOdetails(poid:any){
    return this.http.get('https://localhost:44341/BasePath/PODetail/'+poid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
  });
  }

  mnginvoiceadmin(){
      return this.http.get('https://localhost:44341/BasePath/InvoiceMains/'+this.vid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }

    viewinvoiceadmin(invid:any)
  {
    return this.http.get('https://localhost:44341/BasePath/InvoiceDetails/'+invid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }
   
  mngcircularadmin(){
  return this.http.get('https://localhost:44341/BashPath/CMain/'+this.vid,
  {
    headers:{
  "Content-Type":"application/json",
  "Accept":"application/json",
  "Access-Control-Allow-Headers":"content-type",
  "Authorization": `Bearer ${this.token}`
    }
  }
  );
 }

  viewcircularadmin(cid:any){
    return this.http.get('https://localhost:44341/BashPath/CDetail/'+cid,
    
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }

  editcircularadmin(cid:any){
     return this.http.get('https://localhost:44341/BashPath/CDetail/'+cid,
    
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    });
  }
  
   mngdelscheduleadmin(){
    return this.http.get('https://localhost:44341/BasePath/DSM/'+this.vid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
  });
  }

  viewdeliveryadmin(dsid:any){
    return this.http.get('https://localhost:44341/BasePath/DSDetail/'+dsid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }

  adddeliveryadmin(dsid:any){
     return this.http.get('https://localhost:44341/BasePath/DSDetail/'+dsid,
    {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
    );
  }

  mngadmin(){
     return this.http.get('https://localhost:44341/BasePath/User',
       {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
     );
  }
  addadmin(){
     return this.http.get('https://localhost:44341/BasePath/User');
  }

  edituser(uid:any){
     return this.http.get('https://localhost:44341/BasePath/User/'+uid,
        {
      headers:{
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Access-Control-Allow-Headers":"content-type",
    "Authorization": `Bearer ${this.token}`
      }
    }
     );
  }
  // mnginvoiceadmin(){
  //     return this.http.get('http://jsonplaceholder.typicode.com/users');
  // }
  // mngcirularadmin(){
  //    return this.http.get('http://jsonplaceholder.typicode.com/users');
  // }
  // viewcircularservice(){
  //    return this.http.get('http://jsonplaceholder.typicode.com/users');
  // }


}
