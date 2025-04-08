import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesDesigualdadesComponent } from './ecuaciones-desigualdades.component';

describe('EcuacionesDesigualdadesComponent', () => {
  let component: EcuacionesDesigualdadesComponent;
  let fixture: ComponentFixture<EcuacionesDesigualdadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcuacionesDesigualdadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcuacionesDesigualdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
