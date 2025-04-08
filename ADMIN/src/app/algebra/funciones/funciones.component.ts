import { Component,OnInit ,AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartConfiguration } from 'chart.js';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


@Component({
  selector: 'app-funciones',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './funciones.component.html',
  styleUrl: './funciones.component.scss'
})
export class FuncionesComponent implements AfterViewInit{
  ejercicioLineal: string = '';
  respuestaOrdenada: number | null = null;
  mensajeLineal: string = '';
  procedimientoLineal: string = '';
  coeficienteM: number = 0;
  coeficienteB: number = 0;
  explicacion: string = ''; // <-- propiedad agregada
  respuestaPendiente: number = 0;

  ngOnInit(): void {
    this.generarDatosFuncion();
    this.generarEjercicioLineal();
  }

  generarEjercicioLineal(): void {
    const m = this.numeroAleatorio(-5, 5);
    const b = this.numeroAleatorio(-5, 5);
    const x = this.numeroAleatorio(1, 5);

    this.coeficienteM = m;
    this.coeficienteB = b;
    const y = m * x + b;

    this.ejercicioLineal = `f(x) = ${this.formatoTermino(m, 'x')} ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}. ¿Cuál es el valor de f(${x})?`;
    this.respuestaOrdenada = null;
    this.mensajeLineal = '';
    this.procedimientoLineal = '';
    this.explicacion = ''; // reiniciar explicacion
  }

  verificarFuncionLineal(): void {
    const x = this.extraerXDeEjercicio();
    const resultadoEsperado = this.coeficienteM * x + this.coeficienteB;

    if (this.respuestaOrdenada === resultadoEsperado) {
      this.mensajeLineal = '✅ ¡Correcto!';
    } else {
      this.mensajeLineal = '❌ Incorrecto.';
    }

    this.procedimientoLineal =
      `Procedimiento:<br>` +
      `f(x) = ${this.formatoTermino(this.coeficienteM, 'x')} ${this.coeficienteB >= 0 ? '+ ' + this.coeficienteB : '- ' + Math.abs(this.coeficienteB)}<br>` +
      `f(${x}) = ${this.coeficienteM} * ${x} + ${this.coeficienteB} = ${resultadoEsperado}`;

    this.explicacion =
      `<strong>Explicación:</strong><br>` +
      `Una <em>función lineal</em> tiene la forma f(x) = mx + b.<br>` +
      `Donde <strong>m</strong> es la pendiente (cuánto cambia f(x) cuando x cambia) y <strong>b</strong> es el valor donde la recta corta el eje y.<br>` +
      `Sustituimos el valor de x en la función para obtener f(x).`;
  }

  formatoTermino(coef: number, variable: string): string {
    if (coef === 1) return variable;
    if (coef === -1) return '-' + variable;
    return coef + variable;
  }

  numeroAleatorio(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === 0) return this.numeroAleatorio(min, max); // evitar cero si lo deseas
    return num;
  }

  extraerXDeEjercicio(): number {
    const match = this.ejercicioLineal.match(/f\(([-]?\d+)\)/);
    if (match) {
      return parseInt(match[1], 10);
    }
    return 0;
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'f(x) = 2x + 1',
        borderColor: 'blue',
        backgroundColor: 'rgba(30, 144, 255, 0.3)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  generarDatosFuncion() {
    const xValues: number[] = [];
    const yValues: number[] = [];

    for (let x = -10; x <= 10; x++) {
      xValues.push(x);
      yValues.push(2 * x + 1); // f(x) = 2x + 1
    }

    this.lineChartData.labels = xValues.map(x => x.toString());
    this.lineChartData.datasets[0].data = yValues;
  }

  ngAfterViewInit(): void {
    const ctx = document.getElementById('graficaFuncion') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['-2', '-1', '0', '1', '2'],
        datasets: [{
          label: 'f(x) = 2x + 1',
          data: [-3, -1, 1, 3, 5],
          borderColor: 'blue',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Gráfica de f(x) = 2x + 1'
          }
        }
      }
    });
  }

  m: number = 0;
  b: number = 0;
  xValor: number = 0;
  respuesta: number | null = null;
  mensaje: string = '';
  correcto: boolean = false;

  constructor() {
    this.generarEjercicio();
  }

  generarEjercicio(): void {
    this.m = this.getRandomInt(-5, 5);
    this.b = this.getRandomInt(-10, 10);
    this.xValor = this.getRandomInt(-10, 10);
    this.respuesta = null;
    this.mensaje = '';
    this.correcto = false;
  }

  verificarRespuesta(): void {
    const resultado = this.m * this.xValor + this.b;
    if (this.respuesta === resultado) {
      this.mensaje = '✅ ¡Correcto!';
      this.correcto = true;
    } else {
      this.mensaje = `❌ Incorrecto. La respuesta correcta es ${resultado}`;
      this.correcto = false;
    }
  }

  getRandomInt(min: number, max: number): number {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random === 0 && min < 0 ? this.getRandomInt(min, max) : random;
  }

  getAbs(valor: number): number {
    return Math.abs(valor);
  }
  
}