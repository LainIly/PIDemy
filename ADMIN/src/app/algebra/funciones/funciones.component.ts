import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Exercise {
  id: number;
  question: string;
  correctAnswer: string | number;
  userAnswer?: string | number;
  result?: string;
  inputType: 'number' | 'text';
}

@Component({
  selector: 'app-funciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './funciones.component.html',
  styleUrl: './funciones.component.scss'
})
export class FuncionesComponent {
  exercises: Exercise[] = [
    {
      id: 1,
      question: 'Determina el valor de f(3) para la función f(x) = 2x + 5.',
      correctAnswer: 2 * 3 + 5,
      inputType: 'number'
    },
    {
      id: 2,
      question: 'Calcula el valor de g(-1) para la función g(x) = x² - 4x + 6.',
      correctAnswer: (-1) ** 2 - 4 * (-1) + 6,
      inputType: 'number'
    },
    {
      id: 3,
      question: 'Realiza la suma de las funciones f(x) = x + 1 y g(x) = 2x - 3.',
      correctAnswer: '3x - 2',
      inputType: 'text'
    },
    {
      id: 4,
      question: 'Encuentra el producto de las funciones f(x) = x² y g(x) = x + 1.',
      correctAnswer: 'x³ + x²',
      inputType: 'text'
    },
    {
      id: 5,
      question: 'Determina el valor de la función cuadrática f(x) = -x² + 4x - 3 en x = 2.',
      correctAnswer: (-2) ** 2 + 4 * 2 - 3,
      inputType: 'number'
    },
    {
      id: 6,
      question: 'Calcula el valor de la función lineal f(x) = 3x - 2 en x = -1.',
      correctAnswer: 3 * (-1) - 2,
      inputType: 'number'
    },
    {
      id: 7,
      question: 'Encuentra el valor de la función cuadrática f(x) = 2x² - 3x + 1 en x = 0.',
      correctAnswer: 2 * (0) ** 2 - 3 * (0) + 1,
      inputType: 'number'
    }
  ];

  checkAnswer(exercise: Exercise) {
    const userAnswer = exercise.userAnswer?.toString().trim().toLowerCase();
    const correctAnswer = exercise.correctAnswer.toString().trim().toLowerCase();
    
    if (userAnswer === correctAnswer) {
      exercise.result = "✅ Correcto!";
    } else {
      exercise.result = `❌ Incorrecto, la respuesta es ${exercise.correctAnswer}`;
    }
  }
}