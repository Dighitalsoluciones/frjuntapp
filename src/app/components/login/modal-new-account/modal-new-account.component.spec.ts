import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewAccountComponent } from './modal-new-account.component';

describe('ModalNewAccountComponent', () => {
  let component: ModalNewAccountComponent;
  let fixture: ComponentFixture<ModalNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
