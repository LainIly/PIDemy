// radicales-exponentes.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadicalesExponentesComponent } from './radicales-exponentes.component';

describe('RadicalesExponentesComponent', () => {
  let component: RadicalesExponentesComponent;
  let fixture: ComponentFixture<RadicalesExponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadicalesExponentesComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RadicalesExponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('verificar1 debería validar 3^4 = 81', () => {
    component.respuesta1 = '81';
    component.verificar1();
    expect(component.resultado1).toBeTrue();
  });

  it('verificar2 debería validar √144 = 12', () => {
    component.respuesta2 = '12';
    component.verificar2();
    expect(component.resultado2).toBeTrue();
  });

  it('verificar3 debería aceptar 25^(1/2)', () => {
    component.respuesta3 = '25^(1/2)';
    component.verificar3();
    expect(component.resultado3).toBeTrue();
  });

  it('calificarExamen debería retornar 3/3 si todas son correctas', () => {
    component.examen = {
      res1: '32',
      res2: '8',
      res3: '27^(1/3)'
    };
    component.calificarExamen();
    expect(component.calificacion).toBe(3);
  });
});
