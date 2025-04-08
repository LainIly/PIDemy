import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importa RouterModule para manejar navegación
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  isSideNavVisible: boolean = true; // Estado de visibilidad de la barra lateral
  // Inyecta el Router en el constructor
  
    // Método para alternar la visibilidad de la barra lateral
    toggleSideNav() {
      this.isSideNavVisible = !this.isSideNavVisible;
    }
  menuVisible: boolean = false;
  
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
