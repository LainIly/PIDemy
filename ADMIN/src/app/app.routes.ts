import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthComponent } from './admin/auth/auth.component';
import { UsersComponent } from './admin/users/users.component';
import { CommercesComponent } from './admin/commerces/commerces.component';
import { TransactionsComponent } from './admin/transactions/transactions.component';
import { MisCursosComponent } from './user/mis-cursos/mis-cursos.component';
import { TutoriasComponent } from './user/tutorias/tutorias.component';
import { RecursosComponent } from './user/recursos/recursos.component';
import { AlgebraComponent } from './algebra/algebra.component'; // Componente de la página de Álgebra
import { ProfesoresComponent } from './profesores/profesores.component'; // Componente de la página de Profesores
import { HistorialComponent } from './profesores/historial/historial.component'; // Componente de la página de Historial
import { CursosComponent } from './profesores/cursos/cursos.component'; // Componente de la página de Mis Cursos
import { MisEstudiantesComponent } from './profesores/mis-estudiantes/mis-estudiantes.component';
import { AlgebraBasicaComponent } from './algebra/algebra-basica/algebra-basica.component';
import { EcuacionesDesigualdadesComponent } from './algebra/ecuaciones-desigualdades/ecuaciones-desigualdades.component';
import { PolinomiosComponent } from './algebra/polinomios/polinomios.component';
import { FuncionesComponent } from './algebra/funciones/funciones.component';
import { RadicalesExponentesComponent } from './algebra/radicales-exponentes/radicales-exponentes.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'algebra', component: AlgebraComponent }, // Ruta para el componente de Álgebra
  { path: 'algebra-basica', component: AlgebraBasicaComponent},
  { path: 'ecuaciones-desigualdades', component: EcuacionesDesigualdadesComponent},
  { path: 'polinomios', component: PolinomiosComponent},
  { path: 'funciones', component: FuncionesComponent},
  { path: 'radicales-exponentes', component: RadicalesExponentesComponent}, // Cambia esto por el componente correcto
  { 


    path: 'profesores',
    component: ProfesoresComponent,
    children: [
      { path: 'historial', component: HistorialComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'mis-estudiantes', component: MisEstudiantesComponent },
      { path: '', redirectTo: 'cursos', pathMatch: 'full' }, // Página por defecto dentro de user
    ],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'mis-cursos', component: MisCursosComponent },
      { path: 'tutorias', component: TutoriasComponent },
      { path: 'recursos', component: RecursosComponent },
      { path: '', redirectTo: 'mis-cursos', pathMatch: 'full' }, // Página por defecto dentro de user
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'auth', component: AuthComponent },
      { path: 'users', component: UsersComponent },
      { path: 'commerces', component: CommercesComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '/login' },
  { path: '', component: MisCursosComponent },
];
