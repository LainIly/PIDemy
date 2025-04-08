import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radicales-exponentes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './radicales-exponentes.component.html',
  styleUrls: ['./radicales-exponentes.component.scss']
})
export class RadicalesExponentesComponent {
  currentSection: string = 'teoria';

  // Ejercicios
  respuesta1: string = '';
  resultado1: boolean | null = null;

  respuesta2: string = '';
  resultado2: boolean | null = null;

  respuesta3: string = '';
  resultado3: boolean | null = null;

  // Examen
  examen = {
    res1: '',
    res2: '',
    res3: ''
  };
  calificacion: number | null = null;

  verificar1() {
    this.resultado1 = this.respuesta1.trim() === '81';
  }

  verificar2() {
    this.resultado2 = this.respuesta2.trim() === '12';
  }

  verificar3() {
    const valor = this.respuesta3.trim().toLowerCase();
    this.resultado3 = valor === '25^(1/2)' || valor === '√25';
  }

  calificarExamen() {
    let puntaje = 0;
    if (this.examen.res1.trim() === '32') puntaje++;
    if (this.examen.res2.trim() === '8') puntaje++;
    if (this.examen.res3.trim().toLowerCase() === '27^(1/3)') puntaje++;
    this.calificacion = puntaje;
  }
}