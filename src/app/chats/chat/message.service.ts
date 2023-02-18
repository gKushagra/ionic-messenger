import { Injectable } from '@angular/core';
import { Message, MessageTypes } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  get(userId: string): Message[] {
    return [
      {
        messageId: '1',
        from: 'stacy',
        to: 'john',
        type: MessageTypes.TEXT,
        body: 'Hello! How are',
        timestamp: new Date()
      },
      {
        messageId: '2',
        from: 'john',
        to: 'stach',
        type: MessageTypes.TEXT,
        body: 'I am good',
        timestamp: new Date()
      },
      {
        messageId: '3',
        from: 'stacy',
        to: 'john',
        type: MessageTypes.TEXT,
        body: 'Cool! where are you?',
        timestamp: new Date()
      },
      {
        messageId: '4',
        from: 'john',
        to: 'stacy',
        type: MessageTypes.TEXT,
        body: 'Pittsburgh',
        timestamp: new Date()
      },
      {
        messageId: '5',
        from: 'stacy',
        to: 'john',
        type: MessageTypes.TEXT,
        body: 'Cool',
        timestamp: new Date()
      }
    ]
  }
}
