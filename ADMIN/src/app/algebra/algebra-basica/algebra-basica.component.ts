import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExamenFinalComponent } from './examen-final/examen-final.component';

@Component({
  selector: 'app-algebra-basica',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ExamenFinalComponent],
  templateUrl: './algebra-basica.component.html',
  styleUrl: './algebra-basica.component.scss'
})
export class AlgebraBasicaComponent {
  temaId: string | null = '';

  ejercicio: string = '';
  respuestaCorrecta: number = 0;
  respuestaUsuario: number | null = null;
  mensaje: string = '';
  explicacion: string = '';

  constructor(private route: ActivatedRoute) {
    this.generarEjercicio();
    this.generarEjercicio2();
    this.generarEjercicio3();
    this.generarEjercicio4();
    this.generarEjercicio5();
    this.temaId = this.route.snapshot.paramMap.get('id');
  }

  generarEjercicio() {
    let x = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10
    let suma = Math.floor(Math.random() * 10) + 1; // Número entre 1 y 10

    this.ejercicio = `x + ${suma} = ${x + suma}`;
    this.respuestaCorrecta = x;
    this.mensaje = '';
    this.explicacion = '';
  }

  verificarRespuesta() {
    if (this.respuestaUsuario === this.respuestaCorrecta) {
      this.mensaje = '✅ ¡Correcto! 🎉';
      this.explicacion = '';
    } else {
      this.mensaje = '❌ Inténtalo de nuevo.';
      this.explicacion = `Para resolver la ecuación:<br>
      <b>x + ${this.ejercicio.split(' + ')[1]} = ${this.ejercicio.split('= ')[1]}</b><br>
      Restamos ${this.ejercicio.split(' + ')[1]} en ambos lados:<br>
      <b>x = ${this.respuestaCorrecta}</b>`;
    }
  }

  // Expresiones Algebraicas

  ejercicio2: string = '';
  respuestaCorrecta2: number = 0;
  respuestaUsuario2: number | null = null;
  mensaje2: string = '';
  explicacion2: string = '';

  generarEjercicio2() {
    let coeficiente = Math.floor(Math.random() * 10) + 1;
    let x = Math.floor(Math.random() * 10) + 1;
    let constante = Math.floor(Math.random() * 10) + 1;

    this.ejercicio2 = `${coeficiente}x + ${constante}`;
    this.respuestaCorrecta2 = coeficiente * x + constante;
    this.mensaje2 = '';
    this.explicacion2 = '';
  }

  verificarRespuesta2() {
    if (this.respuestaUsuario2 === this.respuestaCorrecta2) {
      this.mensaje2 = '✅ ¡Correcto! 🎉';
      this.explicacion2 = '';
    } else {
      this.mensaje2 = '❌ Inténtalo de nuevo.';
      this.explicacion2 = `Para evaluar la expresión:<br>
      <b>${this.ejercicio2}, donde x = 5</b><br>
      Sustituyendo x por 5:<br>
      <b>${this.ejercicio2.replace('x', '* 5')} = ${this.respuestaCorrecta2}</b>`;
    }
  }

  //Sume y resta

  ejercicio3: string = '';
  respuestaCorrecta3: number = 0;
  respuestaUsuario3: number | null = null;
  mensaje3: string = '';
  explicacion3: string = '';

  generarEjercicio3() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let coef2 = Math.floor(Math.random() * 10) + 1;
    let signo = Math.random() > 0.5 ? '+' : '-';

    this.ejercicio3 = `${coef1}x ${signo} ${coef2}x`;
    this.respuestaCorrecta3 = signo === '+' ? coef1 + coef2 : coef1 - coef2;
  }

  verificarRespuesta3() {
    if (this.respuestaUsuario3 === this.respuestaCorrecta3) {
      this.mensaje3 = '✅ ¡Correcto!';
      this.explicacion3 = '';
    } else {
      this.mensaje3 = '❌ Inténtalo de nuevo.';
      this.explicacion3 = `Suma o resta los coeficientes:<br>
      <b>${this.ejercicio3} = ${this.respuestaCorrecta3}x</b>`;
    }
  }

  //multiplicacion

  ejercicio4: string = '';
  respuestaCorrecta4: number = 0;
  respuestaUsuario4: number | null = null;
  mensaje4: string = '';
  explicacion4: string = '';

  

  generarEjercicio4() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let coef2 = Math.floor(Math.random() * 10) + 1;
    let exponente1 = Math.floor(Math.random() * 3) + 1;
    let exponente2 = Math.floor(Math.random() * 3) + 1;

    this.ejercicio4 = `(${coef1}x^${exponente1}) * (${coef2}x^${exponente2})`;
    this.respuestaCorrecta4 = coef1 * coef2;
  }

  verificarRespuesta4() {
    if (this.respuestaUsuario4 === this.respuestaCorrecta4) {
      this.mensaje = '✅ ¡Correcto!';
      this.explicacion4 = '';
    } else {
      this.mensaje4 = '❌ Inténtalo de nuevo.';
      this.explicacion4 = `Multiplica los coeficientes:<br>
      <b>${this.ejercicio4} = ${this.respuestaCorrecta4}x^(exp1 + exp2)</b>`;
    }
  }

  //division

  ejercicio5: string = '';
  respuestaCorrecta5: number = 0;
  respuestaUsuario5: number | null = null;
  mensaje5: string = '';
  explicacion5: string = '';

  
  generarEjercicio5() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let divisor = Math.floor(Math.random() * 5) + 1; // Evitar dividir por 0

    this.ejercicio5 = `(${coef1}x) / (${divisor}x)`;
    this.respuestaCorrecta5 = coef1 / divisor;
  }

  verificarRespuesta5() {
    if (this.respuestaUsuario5 === this.respuestaCorrecta5) {
      this.mensaje5 = '✅ ¡Correcto!';
      this.explicacion5 = '';
    } else {
      this.mensaje5 = '❌ Inténtalo de nuevo.';
      this.explicacion5 = `Divide los coeficientes:<br>
      <b>${this.ejercicio5} = ${this.respuestaCorrecta5}</b>`;
    }
  }
}
