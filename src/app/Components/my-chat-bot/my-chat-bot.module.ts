import { ChatBotComponent } from './../chat-bot/chat-bot.component';
import { ChatBotServiceService } from './../../chat-bot-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [ChatBotComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ChatBotComponent],
  bootstrap:[],
  providers:[ChatBotServiceService]
})
export class MyChatBotModule { }
