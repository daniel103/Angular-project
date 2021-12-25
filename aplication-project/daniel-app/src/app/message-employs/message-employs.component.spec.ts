import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEmploysComponent } from './message-employs.component';

describe('MessageEmploysComponent', () => {
  let component: MessageEmploysComponent;
  let fixture: ComponentFixture<MessageEmploysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageEmploysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEmploysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
