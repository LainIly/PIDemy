import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})

export class HistorialComponent {
  historial = [
    { tipo: 'curso', mensaje: 'Creaste el curso "Álgebra I"', fecha: '2025-03-10' },
    { tipo: 'inscripcion', mensaje: 'Ana López se inscribió en "Álgebra I"', fecha: '2025-03-11' },
    { tipo: 'modificacion', mensaje: 'Cambiaste el horario de "Geometría" a Martes y Jueves 3 PM', fecha: '2025-03-12' },
    { tipo: 'curso', mensaje: 'Creaste el curso "Cálculo Diferencial"', fecha: '2025-03-14' },
    { tipo: 'inscripcion', mensaje: 'Carlos Martínez se inscribió en "Cálculo Diferencial"', fecha: '2025-03-15' }
  ];
}

