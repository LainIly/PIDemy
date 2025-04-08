import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-polinomios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './polinomios.component.html',
  styleUrl: './polinomios.component.scss'
})
export class PolinomiosComponent {
  temaId: string | null = '';
  
  ejercicio: string = '';
  respuestaCorrecta: number = 0;
  respuestaUsuario: number | null = null;
  mensaje: string = '';
  explicacion: string = '';

  constructor(private route: ActivatedRoute) {
    this.temaId = this.route.snapshot.paramMap.get('id');
    this.generarEjercicioSuma();
  }

  generarEjercicioSuma() {
    let coef1 = Math.floor(Math.random() * 10) + 1;
    let coef2 = Math.floor(Math.random() * 10) + 1;
    let coef3 = Math.floor(Math.random() * 10) + 1;
    let coef4 = Math.floor(Math.random() * 10) + 1;
    
    this.ejercicio = `(${coef1}x^2 + ${coef2}x + ${coef3}) + (${coef4}x^2 + ${coef3}x + ${coef2})`;
    this.respuestaCorrecta = coef1 + coef4;
    this.mensaje = '';
    this.explicacion = '';
  }

  verificarRespuesta() {
    if (this.respuestaUsuario === this.respuestaCorrecta) {
      this.mensaje = '✅ ¡Correcto! 🎉';
      this.explicacion = '';
    } else {
      this.mensaje = '❌ Inténtalo de nuevo.';
      this.explicacion = `Suma los coeficientes de los términos semejantes:<br>
      <b>${this.ejercicio} = ${(this.respuestaCorrecta)}x^2 + ...</b>`;
    }
  }
}
