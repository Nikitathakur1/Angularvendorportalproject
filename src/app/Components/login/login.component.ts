import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginform: any = FormGroup;
  istoken: any;
  temp: any;
  isvendorid: any = 2;
  headers = new Headers();
  obj: any;
  isloading: boolean = false;
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  constructor(public router: Router, public srv: ServiceService) { }
  ngOnInit(): void {
    // sessionStorage.setItem("VendorID",this.isvendorid);
    this.loginform = new FormGroup({
      uid: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      pwd: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)
    ]),
      option: new FormControl('', Validators.required)
    })
  }

  loginUser() {
    this.isloading = !this.isloading;
    let body = {
      userEmail: this.loginform.value.uid,
      password: this.loginform.value.pwd,
      option: this.loginform.value.option
    }
    console.log(body);
    localStorage.setItem("selectedoption", body.option);
    console.log(localStorage.getItem("selectedoption"));

    this.srv.login(body).subscribe((data): any => {
      // debugger;
      this.temp = data;
      console.log(this.temp);
      // console.log(this.temp.data.jwToken);
      this.isvendorid = this.temp.data.userId;
      // console.log(this.isvendorid);
      sessionStorage.setItem("VendorID", this.isvendorid);
      console.log("VendorID: " + sessionStorage.getItem("VendorID"));

      if (this.isvendorid != undefined) {
        localStorage.setItem("token", this.temp.data.jwToken);
        console.log("Response Token :<br/>" + this.temp.data.jwToken);
        if (localStorage.getItem("token")) {
          this.router.navigate(['/home']);
        }
      }
      else {
        alert("Please enter Valid User !!!");
      }
    })

    // if(!this.loginform.invalid){
    //   localStorage.setItem("token",body.uid);
    //   this.istoken=localStorage.getItem("token");
    //   if(this.istoken){
    //   this.router.navigate(['/home']);
    //   alert("token Created");
    //   console.log(this.istoken);
    // }
    // }
    // else {
    //   alert("Please enter Valid Credentials !!!");
    // }

    // this.router.navigate(['/home']);
  }
}

