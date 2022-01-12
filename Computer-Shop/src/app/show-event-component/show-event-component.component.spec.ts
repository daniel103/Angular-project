import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventComponentComponent } from './show-event-component.component';

describe('ShowEventComponentComponent', () => {
  let component: ShowEventComponentComponent;
  let fixture: ComponentFixture<ShowEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEventComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
