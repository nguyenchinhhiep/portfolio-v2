import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAppComponent } from './chat-app.component';
import { ChatNavbarComponent } from './chat-navbar/chat-navbar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {
      path: '',
      component: ChatAppComponent
   }
]
@NgModule({
  declarations: [ChatAppComponent, ChatNavbarComponent, ChatThreadsComponent, ChatWindowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatAppModule { }
