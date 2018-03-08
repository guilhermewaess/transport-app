import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsPresenterComponent } from './form-errors-presenter.component';

describe('FormErrorsPresenterComponent', () => {
  let component: FormErrorsPresenterComponent;
  let fixture: ComponentFixture<FormErrorsPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormErrorsPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
