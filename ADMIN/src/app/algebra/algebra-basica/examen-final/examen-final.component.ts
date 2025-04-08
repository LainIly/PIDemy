import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlgebraBasicaComponent } from '../algebra-basica.component';

@Component({
  selector: 'app-examen-final',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AlgebraBasicaComponent],
  templateUrl: './examen-final.component.html',
  styleUrl: './examen-final.component.scss'
})
export class ExamenFinalComponent {
  preguntas: any[] = [];
  respuestasUsuario: string[] = [];
  mensajes: string[] = [];

  constructor() {
    this.generarPreguntas();
  }

  generarPreguntas() {
    this.preguntas = [];

    for (let i = 0; i < 5; i++) {
      let pregunta = this.generarPreguntaAleatoria();
      this.preguntas.push(pregunta);
      this.respuestasUsuario.push('');
      this.mensajes.push('');
    }
  }

  generarPreguntaAleatoria() {
    const tiposDePreguntas = [
      () => this.generarSumaTerminos(),
      () => this.generarMultiplicacion(),
      () => this.generarDivision()
    ];

    const tipoSeleccionado = tiposDePreguntas[Math.floor(Math.random() * tiposDePreguntas.length)];
    return tipoSeleccionado();
  }

  generarSumaTerminos() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let coef2 = Math.floor(Math.random() * 10) + 1;
    let correcta = `${coef1 + coef2}x`;

    return this.crearPregunta(`¿Cuánto es ${coef1}x + ${coef2}x?`, correcta);
  }

  generarMultiplicacion() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let coef2 = Math.floor(Math.random() * 10) + 1;
    let correcta = `${coef1 * coef2}x²`;

    return this.crearPregunta(`¿Cuánto es (${coef1}x) * (${coef2}x)?`, correcta);
  }

  generarDivision() {
    let coef1 = (Math.floor(Math.random() * 5) + 1) * 2; // Para garantizar que sea divisible
    let coef2 = 2;
    let correcta = `${coef1 / coef2}x`;

    return this.crearPregunta(`¿Cuánto es (${coef1}x) / (${coef2})?`, correcta);
  }

  crearPregunta(pregunta: string, correcta: string) {
    let opciones = [correcta];

    while (opciones.length < 4) {
      let incorrecta = `${Math.floor(Math.random() * 20) + 1}x`;
      if (!opciones.includes(incorrecta)) {
        opciones.push(incorrecta);
      }
    }

    opciones = this.mezclarArreglo(opciones);

    return { pregunta, opciones, correcta };
  }

  mezclarArreglo(arreglo: any[]) {
    return arreglo.sort(() => Math.random() - 0.5);
  }

  verificarRespuestas() {
    let respuestasCorrectas = 0;
  
    this.preguntas.forEach((pregunta, i) => {
      if (this.respuestasUsuario[i] === pregunta.correcta) {
        this.mensajes[i] = '¡Correcto! 🎉';
        respuestasCorrectas++;
      } else {
        this.mensajes[i] = 'Inténtalo de nuevo. ❌';
      }
    });
  
    // Si todas las respuestas son correctas, marcar el examen como aprobado
    if (respuestasCorrectas === this.preguntas.length) {
      localStorage.setItem('examenAprobado', 'true');
      alert('¡Felicidades! Has aprobado el examen. Ahora puedes avanzar al siguiente nivel.');
    } else {
      localStorage.setItem('examenAprobado', 'false');
      alert('No has aprobado el examen. Debes contestar todas las preguntas correctamente para avanzar.');
    }
  }
}
