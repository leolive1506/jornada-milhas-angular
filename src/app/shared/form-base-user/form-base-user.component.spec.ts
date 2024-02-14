import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBaseUserComponent } from './form-base-user.component';

describe('FormBaseUserComponent', () => {
  let component: FormBaseUserComponent;
  let fixture: ComponentFixture<FormBaseUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBaseUserComponent]
    });
    fixture = TestBed.createComponent(FormBaseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
