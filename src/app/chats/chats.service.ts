import { Injectable } from '@angular/core';
import { Chat } from './chats.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor() { }

  get(): Chat[] {
    return [
      { userId: 'stacy', profileImage: '', name: 'Stacy' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' },
      { userId: '1', profileImage: '', name: 'John Doe' }
    ]
  }
}
