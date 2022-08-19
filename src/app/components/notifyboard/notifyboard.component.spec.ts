import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyboardComponent } from './notifyboard.component';

describe('NotifyboardComponent', () => {
  let component: NotifyboardComponent;
  let fixture: ComponentFixture<NotifyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
