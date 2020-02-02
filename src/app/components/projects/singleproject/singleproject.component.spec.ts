import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprojectComponent } from './singleproject.component';

describe('SingleprojectComponent', () => {
  let component: SingleprojectComponent;
  let fixture: ComponentFixture<SingleprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
