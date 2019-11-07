import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProposeComponent } from './dialog-propose.component';

describe('DialogProposeComponent', () => {
  let component: DialogProposeComponent;
  let fixture: ComponentFixture<DialogProposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogProposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
