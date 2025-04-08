import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],  // ✅ Importa ReactiveFormsModule en lugar de FormGroup
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['user', Validators.required]  // Valor por defecto 'user'
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/registro', this.registerForm.value)
        .subscribe(
          response => {
            console.log('Usuario registrado correctamente:', response);
            alert('Registro exitoso');
          },
          error => {
            console.error('Error al registrar:', error);
            alert('Error en el registro');
          }
        );
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
