import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mis-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule, ], // Agrega CommonModule aquí
  templateUrl: './mis-cursos.component.html',
  styleUrl: './mis-cursos.component.scss'
})
export class MisCursosComponent {
  searchText: string = '';

  cursos = [
    { 
      nombre: 'Algebra', 
      descripcion: 'Rama de las matemáticas que estudia estructuras algebraicas como grupos, anillos y cuerpos. Se centra en el estudio de ecuaciones, expresiones algebraicas, polinomios y sus propiedades. Su aplicación es fundamental en áreas como la ingeniería, la informática y la física.' 
    },
    { 
      nombre: 'Calculo Diferencial', 
      descripcion: 'Área del cálculo que estudia la tasa de cambio de funciones mediante el uso de derivadas. Analiza conceptos como límite, continuidad, regla de la cadena y aplicaciones en problemas de optimización, cinemática y modelado de fenómenos naturales.' 
    },
    { 
      nombre: 'Estadistica Basica', 
      descripcion: 'Disciplina matemática encargada de la recopilación, organización, análisis e interpretación de datos. Incluye conceptos fundamentales como medidas de tendencia central (media, mediana, moda), medidas de dispersión (varianza, desviación estándar) y distribuciones de probabilidad como la normal y binomial.' 
    },
    { 
      nombre: 'Ecuaciones Diferenciales', 
      descripcion: 'Estudio de ecuaciones que relacionan una función desconocida con sus derivadas. Se utilizan en la modelización matemática de fenómenos físicos, biológicos y económicos. Se dividen en ecuaciones diferenciales ordinarias (ODE) y ecuaciones en derivadas parciales (PDE).' 
    },
    { 
      nombre: 'Geometria Analitica', 
      descripcion: 'Campo de las matemáticas que estudia figuras y relaciones geométricas mediante un sistema de coordenadas. Permite analizar rectas, círculos, elipses, parábolas e hipérbolas utilizando ecuaciones algebraicas y el concepto de vector.' 
    },
    { 
      nombre: 'Probabilidad y Estadistica', 
      descripcion: 'Rama de las matemáticas que estudia fenómenos aleatorios. La probabilidad se centra en el cálculo de la ocurrencia de eventos, mientras que la estadística analiza datos para inferir patrones y realizar predicciones. Se aplica en ciencia, economía, medicina y muchas otras áreas.' 
    },
    { 
      nombre: 'Integrales', 
      descripcion: 'Herramienta matemática utilizada para calcular áreas bajo curvas, volúmenes de revolución y resolver ecuaciones diferenciales. Existen dos tipos principales: integrales indefinidas, que representan la antiderivada de una función, e integrales definidas, que calculan valores exactos en un intervalo específico.' 
    },
    { 
      nombre: 'Algebra Lineal', 
      descripcion: 'Rama de las matemáticas que estudia los espacios vectoriales y transformaciones lineales. Sus principales conceptos incluyen vectores, matrices, determinantes, sistemas de ecuaciones lineales, espacios vectoriales y valores propios. Es clave en la computación, la física y la inteligencia artificial.' 
    }
  ];
  

  mostrarModal = false;
  cursoSeleccionado: { nombre: string; descripcion: string } | null = null;

  // Método para filtrar cursos
  get cursosFiltrados() {
    return this.cursos.filter(curso => 
      curso.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  abrirModal(curso: { nombre: string; descripcion: string }) {
    this.cursoSeleccionado = curso;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.cursoSeleccionado = null;
  }
}


  



