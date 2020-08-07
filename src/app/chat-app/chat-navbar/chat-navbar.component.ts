import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-chat-navbar',
   templateUrl: './chat-navbar.component.html',
   styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {

   unreadMessagesCount: number;
   constructor() { }

   ngOnInit(): void {
   }

}
