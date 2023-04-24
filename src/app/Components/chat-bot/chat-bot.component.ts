// import { Component, OnInit } from '@angular/core';
// import { MyChatBotModule } from '../my-chat-bot/my-chat-bot.module';
// import { ChatBot } from 'angular-ai-chat-bot';

// @Component({
//   selector: 'app-chat-bot',
//   templateUrl: './chat-bot.component.html',
//   styleUrls: ['./chat-bot.component.css']
// })
// export class ChatBotComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ChatBotServiceService, Message } from 'src/app/chat-bot-service.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  messages:Message[] = [];
  value: any;
  constructor(public chatService: ChatBotServiceService) { }
  ngOnInit() {
      this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }
  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    this.value = '';
  }
}
