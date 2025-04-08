import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  profesor = 'Profesor Juan Pérez'; // Aquí se puede asignar dinámicamente según el usuario logueado
  cursos = [
    { nombre: 'Álgebra I', horario: 'Lunes y Miércoles 10 AM' },
    { nombre: 'Geometría', horario: 'Martes y Jueves 2 PM' }
  ];

  modalAbierto = false;
  nuevoCurso = { nombre: '', horario: '' };

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.nuevoCurso = { nombre: '', horario: '' };
  }

  crearCurso() {
    if (this.nuevoCurso.nombre && this.nuevoCurso.horario) {
      this.cursos.push({ ...this.nuevoCurso });
      this.cerrarModal();
    }
  }
}
