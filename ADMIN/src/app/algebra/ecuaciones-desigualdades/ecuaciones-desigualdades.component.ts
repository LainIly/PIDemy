import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlgebraComponent } from '../algebra.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

interface PreguntaExamen {
  texto: string;
  opciones: string[];
  respuestaCorrecta: string;
}

@Component({
  selector: 'app-ecuaciones-desigualdades',
  standalone: true,
  imports: [FormsModule, CommonModule, AlgebraComponent, RouterLink, RouterModule],
  templateUrl: './ecuaciones-desigualdades.component.html',
  styleUrl: './ecuaciones-desigualdades.component.scss',
})
export class EcuacionesDesigualdadesComponent {
  coefA: number = 0;
  coefB: number = 0;
  solucion: number = 0;
  respuestaUsuario: string = '';
  mensaje: string = '';
  procedimiento: string = '';

  ngOnInit() {
    this.generarEcuacion();
    this.generateSystem();
    this.generarDesigualdad();
    this.crearPreguntasAleatorias();
  }

  generarEcuacion() {
    this.coefA = Math.floor(Math.random() * 9) + 1; // Evita 0
    this.coefB = Math.floor(Math.random() * 20) - 10; // Puede ser negativo
    this.solucion = -this.coefB / this.coefA;
    this.mensaje = '';
    this.procedimiento = '';
    this.respuestaUsuario = '';
  }

  verificarRespuesta() {
    const respuestaNum = parseFloat(this.respuestaUsuario);
    if (!isNaN(respuestaNum) && respuestaNum === this.solucion) {
      this.mensaje = '✅ Respuesta correcta';
      this.procedimiento = '';
    } else {
      this.mensaje = '❌ Respuesta incorrecta';
      this.procedimiento = `Para resolver ${this.coefA}x + ${this.coefB} = 0:\n` +
                          `Despejamos x: ${this.coefA}x = ${-this.coefB}\n` +
                          `Dividimos entre ${this.coefA}: x = ${this.solucion}`;
    }
  }

  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  e: number = 0;
  f: number = 0;
  userX: number | null = null;
  userY: number | null = null;
  solutionX: number = 0;
  solutionY: number = 0;
  resultMessage: string = '';
  steps: string[] = [];

  generateSystem(): void {
    this.a = this.getRandomNumber();
    this.b = this.getRandomNumber();
    this.c = this.getRandomNumber();
    this.d = this.getRandomNumber();
    this.e = this.getRandomNumber();
    this.f = this.getRandomNumber();
    this.solveSystem();
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  solveSystem(): void {
    const determinant = this.a * this.d - this.b * this.c;
    if (determinant !== 0) {
      this.solutionX = (this.e * this.d - this.b * this.f) / determinant;
      this.solutionY = (this.a * this.f - this.e * this.c) / determinant;
      this.steps = [
        `Determinante = (${this.a} * ${this.d}) - (${this.b} * ${this.c}) = ${determinant}`,
        `x = ((${this.e} * ${this.d}) - (${this.b} * ${this.f})) / ${determinant} = ${this.solutionX}`,
        `y = ((${this.a} * ${this.f}) - (${this.e} * ${this.c})) / ${determinant} = ${this.solutionY}`
      ];
    } else {
      this.solutionX = this.solutionY = NaN;
      this.steps = ['El sistema no tiene solución única.'];
    }
  }

  checkSolution(): void {
    if (this.userX === this.solutionX && this.userY === this.solutionY) {
      this.resultMessage = '¡Correcto! Has resuelto el sistema correctamente.';
    } else {
      this.resultMessage = 'Incorrecto. Aquí tienes la solución paso a paso:';
    }
  }

  coeficienteX: number = 0;
  terminoIndependiente: number = 0;
  resultadoDerecha: number = 0;
  respuestaUsuario2: number | null = null;
  respuestaCorrecta: number = 0;
  mensajeResultado: string = '';
  pasosSolucion: string[] = [];

  

  generarDesigualdad(): void {
    this.coeficienteX = this.obtenerNumeroAleatorio(1, 10);
    this.terminoIndependiente = this.obtenerNumeroAleatorio(-10, 10);
    this.resultadoDerecha = this.obtenerNumeroAleatorio(-10, 10);
    this.respuestaCorrecta = (this.resultadoDerecha - this.terminoIndependiente) / this.coeficienteX;
    this.pasosSolucion = [];
    this.mensajeResultado = '';
    this.respuestaUsuario2 = null;
  }

  obtenerNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verificarRespuesta2(): void {
    if (this.respuestaUsuario2 === this.respuestaCorrecta) {
      this.mensajeResultado = '¡Correcto! Has resuelto la desigualdad correctamente.';
    } else {
      this.mensajeResultado = 'Incorrecto. Aquí tienes la solución paso a paso:';
      this.pasosSolucion = [
        `Despejamos x:`,
        `${this.coeficienteX}x ≤ ${this.resultadoDerecha} - (${this.terminoIndependiente})`,
        `${this.coeficienteX}x ≤ ${this.resultadoDerecha - this.terminoIndependiente}`,
        `Dividimos por ${this.coeficienteX}:`,
        `x ≤ (${this.resultadoDerecha - this.terminoIndependiente}) / ${this.coeficienteX}`,
        `x ≤ ${this.respuestaCorrecta}`
      ];
    }
  }

  //examen final
  listaPreguntas: PreguntaExamen[] = [];
  respuestasSeleccionadas: string[] = [];
  resultadoExamen: string = '';


  crearPreguntasAleatorias(): void {
    this.listaPreguntas = [];
    for (let i = 0; i < 5; i++) {
      this.listaPreguntas.push(this.generarPregunta());
    }
    this.respuestasSeleccionadas = new Array(this.listaPreguntas.length).fill('');
  }

  generarPregunta(): PreguntaExamen {
    const tipoPregunta = Math.floor(Math.random() * 3); // 0: ecuación, 1: sistema, 2: desigualdad
    let texto = '';
    let opciones: string[] = [];
    let respuestaCorrecta = '';
    
    if (tipoPregunta === 0) {
      // Ecuación de primer grado
      const coefA = this.obtenerNumeroAleatorio(1, 10);
      const coefB = this.obtenerNumeroAleatorio(-10, 10);
      const coefC = this.obtenerNumeroAleatorio(-10, 10);
      const solucion = (coefC - coefB) / coefA;
      texto = `Resuelve la ecuación: ${coefA}x + (${coefB}) = ${coefC}`;
      opciones = this.crearOpciones(solucion);
      respuestaCorrecta = opciones[0];
    } else if (tipoPregunta === 1) {
      // Sistema de ecuaciones
      const a1 = this.obtenerNumeroAleatorio(1, 5);
      const b1 = this.obtenerNumeroAleatorio(1, 5);
      const c1 = this.obtenerNumeroAleatorio(1, 20);
      const a2 = this.obtenerNumeroAleatorio(1, 5);
      const b2 = this.obtenerNumeroAleatorio(1, 5);
      const c2 = this.obtenerNumeroAleatorio(1, 20);
      const determinante = a1 * b2 - a2 * b1;
      if (determinante !== 0) {
        const x = (c1 * b2 - c2 * b1) / determinante;
        const y = (a1 * c2 - a2 * c1) / determinante;
        texto = `Resuelve el sistema: ${a1}x + ${b1}y = ${c1}, ${a2}x + ${b2}y = ${c2}`;
        respuestaCorrecta = `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
        opciones = this.crearOpcionesSistema(x, y);
      } else {
        return this.generarPregunta();
      }
    } else {
      // Desigualdad
      const coefA = this.obtenerNumeroAleatorio(1, 10);
      const coefB = this.obtenerNumeroAleatorio(-10, 10);
      const coefC = this.obtenerNumeroAleatorio(-10, 10);
      const solucion = (coefC - coefB) / coefA;
      texto = `Resuelve la desigualdad: ${coefA}x + (${coefB}) ≤ ${coefC}`;
      opciones = this.crearOpciones(solucion);
      respuestaCorrecta = opciones[0];
    }
    return { texto, opciones, respuestaCorrecta };
  }

  obtenerNumeroAleatorio2(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  crearOpciones(solucion: number): string[] {
    const opciones = [solucion.toFixed(2)];
    while (opciones.length < 4) {
      const incorrecta = (solucion + this.obtenerNumeroAleatorio2(-3, 3)).toFixed(2);
      if (!opciones.includes(incorrecta)) {
        opciones.push(incorrecta);
      }
    }
    return this.mezclarOpciones(opciones);
  }

  crearOpcionesSistema(x: number, y: number): string[] {
    const opciones = [`x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`];
    while (opciones.length < 4) {
      const incorrectoX = (x + this.obtenerNumeroAleatorio2(-3, 3)).toFixed(2);
      const incorrectoY = (y + this.obtenerNumeroAleatorio2(-3, 3)).toFixed(2);
      const incorrecta = `x = ${incorrectoX}, y = ${incorrectoY}`;
      if (!opciones.includes(incorrecta)) {
        opciones.push(incorrecta);
      }
    }
    return this.mezclarOpciones(opciones);
  }

  mezclarOpciones(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  evaluarRespuestas(): void {
    let respuestasCorrectas = 0;
    this.listaPreguntas.forEach((pregunta, index) => {
      if (this.respuestasSeleccionadas[index] === pregunta.respuestaCorrecta) {
        respuestasCorrectas++;
      }
    });
    this.resultadoExamen = `Has obtenido ${respuestasCorrectas} de ${this.listaPreguntas.length} respuestas correctas.`;
    
    if (respuestasCorrectas === this.listaPreguntas.length) {
      localStorage.setItem('examenAprobado2', 'true');
      alert('¡Felicidades! Has aprobado el examen. Ahora puedes avanzar al siguiente nivel.');
    } else {
      localStorage.setItem('examenAprobado2', 'false');
      alert('No has aprobado el examen. Debes contestar todas las preguntas correctamente para avanzar.');
    }
  }

  
}
