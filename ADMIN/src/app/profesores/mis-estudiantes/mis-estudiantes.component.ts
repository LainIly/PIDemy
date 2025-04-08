import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mis-estudiantes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mis-estudiantes.component.html',
  styleUrl: './mis-estudiantes.component.scss'
})
export class MisEstudiantesComponent {
  estudiantes = [
      { nombre: 'Ana López', curso: 'Álgebra I' },
      { nombre: 'Carlos Martínez', curso: 'Álgebra I' },
      { nombre: 'Elena Rodríguez', curso: 'Geometría' },
      { nombre: 'Juan García', curso: 'Geometría' },
      { nombre: 'María Fernández', curso: 'Álgebra I' }
    ];
}

