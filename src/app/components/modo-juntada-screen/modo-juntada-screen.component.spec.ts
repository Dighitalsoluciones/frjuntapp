import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoJuntadaScreenComponent } from './modo-juntada-screen.component';

describe('ModoJuntadaScreenComponent', () => {
  let component: ModoJuntadaScreenComponent;
  let fixture: ComponentFixture<ModoJuntadaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModoJuntadaScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModoJuntadaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
