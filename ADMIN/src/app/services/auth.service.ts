import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) {}

  // Método para enviar los datos de login al backend
  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}