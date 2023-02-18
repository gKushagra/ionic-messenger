import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from './chats.interface';
import { ChatsService } from './chats.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage {

  chats: Chat[] = [];

  constructor(
    private chatsService: ChatsService,
    private router: Router,
  ) {
    this.loadChats();
  }

  loadChats(): void {
    this.chats = this.chatsService.get();
  }

  loadChat(userId: string): void {
    this.router.navigate(['/app/tabs/chats/chat'], { queryParams: { userId } });
  }

}
