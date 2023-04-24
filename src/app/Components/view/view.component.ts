// import { ChatBot } from 'angular-ai-chat-bot';
// import { MyChatBotModule } from './../my-chat-bot/my-chat-bot.module';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  show = true;
  s1: any = "Suppilers";
  s2: any = "Users";
  option: any = localStorage.getItem("selectedoption");
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.clear();
    sessionStorage.clear();
    console.log(localStorage.getItem("token"));
    console.log("Deleted Token Successfully...");
    // alert("token Deleted..");
    this.router.navigate(['']);
  }
  isshow() {
    this.show = !this.show;
    // this.show=true;
  }
}
