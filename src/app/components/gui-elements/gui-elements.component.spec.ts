import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiElementsComponent } from './gui-elements.component';

describe('GuiElementsComponent', () => {
  let component: GuiElementsComponent;
  let fixture: ComponentFixture<GuiElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
    // expect(component).toBeTruthy();
  // });
});
