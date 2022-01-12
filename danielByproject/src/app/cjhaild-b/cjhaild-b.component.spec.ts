import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CjhaildBComponent } from './cjhaild-b.component';

describe('CjhaildBComponent', () => {
  let component: CjhaildBComponent;
  let fixture: ComponentFixture<CjhaildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CjhaildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CjhaildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
