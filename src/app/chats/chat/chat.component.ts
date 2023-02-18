import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild('scrollMe') scrollContainerRef: ElementRef;
  messages: Message[] = [];

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) {
    this.loadMessages();
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  loadMessages(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.messages = this.messageService.get(params['userId']);
      });
  }

  scrollToBottom(): void {
    try {
      this.scrollContainerRef.nativeElement.scrollTop = this.scrollContainerRef.nativeElement.scrollHeight;
    } catch (error) {
      console.error('Scroll Error', error);
    }
  }

}
