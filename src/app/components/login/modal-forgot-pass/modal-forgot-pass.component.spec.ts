import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForgotPassComponent } from './modal-forgot-pass.component';

describe('ModalForgotPassComponent', () => {
  let component: ModalForgotPassComponent;
  let fixture: ComponentFixture<ModalForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalForgotPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
