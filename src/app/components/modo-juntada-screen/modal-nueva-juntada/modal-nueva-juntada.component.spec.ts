import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaJuntadaComponent } from './modal-nueva-juntada.component';

describe('ModalNuevaJuntadaComponent', () => {
  let component: ModalNuevaJuntadaComponent;
  let fixture: ComponentFixture<ModalNuevaJuntadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNuevaJuntadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNuevaJuntadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
