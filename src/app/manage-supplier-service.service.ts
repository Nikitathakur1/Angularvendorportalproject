import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManageSupplier } from './model/manage-supplier';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManageSupplierServiceService {

  baseApiUrl:string='https://localhost:44356'
    constructor(private http:HttpClient){}
      getAllManageSuppliers():Observable<ManageSupplier[]>{
        return this.http.get<ManageSupplier[]>(this.baseApiUrl +'/api/Suppliers');
    }

    addManageSupplier(AddManageRequest:ManageSupplier):Observable<ManageSupplier>
    {
      AddManageRequest.supplierID=1;
    return this.http.post<ManageSupplier>(this.baseApiUrl +'/api/Suppliers',AddManageRequest);
    }

    getManageSupplier(SupplierID:any):Observable<ManageSupplier>{
      return  this.http.get<ManageSupplier>(this.baseApiUrl+'/api/Suppliers'+ SupplierID)
    }

    updateManageSupplier(SupplierID :any ,AddManageRequest:ManageSupplier):Observable<ManageSupplier>{
    return  this.http.put<ManageSupplier>(this.baseApiUrl+ '/api/Suppliers/{id}'+SupplierID,AddManageRequest)
    }


    GetManageSupplerById(SupplierID:any):Observable<ManageSupplier>{
      return  this.http.get<ManageSupplier>(this.baseApiUrl+'//api/Suppliers/{id}'+ SupplierID)
    }
   
 } 

