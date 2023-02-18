import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChatsPage } from './chats.page';

describe('Tab1Page', () => {
  let component: ChatsPage;
  let fixture: ComponentFixture<ChatsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
