import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicBasedComponent } from './logic-based.component';

describe('LogicBasedComponent', () => {
  let component: LogicBasedComponent;
  let fixture: ComponentFixture<LogicBasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
