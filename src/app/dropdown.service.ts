import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { State } from './model/state.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  State!: State[];
  
  constructor(private http: HttpClient) { }

  getAllCountry(){
    return this.http.get('https://localhost:44356/api/Countries');
  }

  getStateByCountry1(countryId: number){
    return this.http.get('https://localhost:44356/api/States');   
  }

  getCityByState1(){
    return this.http.get('https://localhost:44356/api/Cities');
  }
   handleError = (error: any) => {

        return of('');
    
      }
  getStateByCountry(id: number): Observable<any> {

      return this.http.get<any>('https://localhost:44356/api/States/' + id).pipe(catchError(this.handleError));
    
    
    
    
      }
    getCityByState(id: number): Observable<any>{
      return this.http.get<any>('https://localhost:44356/api/Cities/' + id).pipe(catchError(this.handleError));
    }
 
}
