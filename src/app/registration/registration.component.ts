import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  header = new HttpHeaders();
  registerform:any=FormGroup;
  public users:any;
 isloading : boolean = false;
 
 constructor(public regserv:ServiceService) { 
 
}


  ngOnInit(): void {
      this.registerform= new FormGroup(
        {
          uname: new FormControl(),
          pwd: new FormControl(),
         cpwd: new FormControl(),
          fname: new FormControl(),
          lname: new FormControl(),
          types: new FormControl(),
          // roles: new FormControl(),
          mail: new FormControl(),
        })
    }
    registerUsers(){

     

      let body={
        firstName: this.registerform.value.fname,
        lastName: this.registerform.value.lname,
        email: this.registerform.value.mail,
          userName: this.registerform.value.uname,
          password: this.registerform.value.pwd,  
         confirmPassword: this.registerform.value.cpwd,
          userType: this.registerform.value.types,
          
      }
        console.log("In Component : "+body); 
        this.registerform.reset();
                this.regserv.registerUser(body).subscribe((data):any => {
          alert("register user"); 
         this.users = data;
        // console.log(this.users);
      });
    
     
    }
}
 



