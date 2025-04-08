import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AlgebraBasicaComponent } from './algebra-basica/algebra-basica.component';
import { RouterLink } from '@angular/router';
import { PolinomiosComponent } from './polinomios/polinomios.component';


@Component({
  selector: 'app-algebra',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,AlgebraBasicaComponent, RouterLink, PolinomiosComponent],
  templateUrl: './algebra.component.html',
  styleUrl: './algebra.component.scss'
})
export class AlgebraComponent {
  examenAprobado: boolean = false;
  examenAprobado2: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar si el examen fue aprobado en localStorage
    this.examenAprobado = localStorage.getItem('examenAprobado') === 'true';

  }

  verificarAcceso() {
    if (this.examenAprobado) {
      this.router.navigate(['/ecuaciones-desigualdades']);
    } else {
      alert('Debes aprobar el examen de Álgebra Básica antes de continuar.');
    }
  }

  verificarPermisoExamen() {

    const examenAprobado2 = localStorage.getItem('examenAprobado2') === 'true';
  
    if (examenAprobado2) {
      this.router.navigate(['/polinomios']); // Cambia la ruta según necesites
    } else {
      alert('No puedes acceder a esta sección hasta aprobar el examen de ecuaciones y desigualdades.');
    }
  }
}
