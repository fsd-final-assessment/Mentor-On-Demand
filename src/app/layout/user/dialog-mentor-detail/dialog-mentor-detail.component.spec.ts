import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMentorDetailComponent } from './dialog-mentor-detail.component';

describe('DialogMentorDetailComponent', () => {
  let component: DialogMentorDetailComponent;
  let fixture: ComponentFixture<DialogMentorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMentorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMentorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
