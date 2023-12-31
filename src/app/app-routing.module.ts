import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',/* Al cambiar el nombre acá se altera a que pagina cambia al iniciar el proyecto */
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),canActivate: [NoAuthGuard]
  },
  {
    path: 'rec-contra',
    loadChildren: () => import('./pages/rec-contra/rec-contra.module').then( m => m.RecContraPageModule)
  },
  {
    path: 'valid-data-rec',
    loadChildren: () => import('./pages/valid-data-rec/valid-data-rec.module').then( m => m.ValidDataRecPageModule)
  },
  {
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'asignatura1',
    loadChildren: () => import('./pages/asig/asignatura1/asignatura1.module').then( m => m.Asignatura1PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'inf-acad',
    loadChildren: () => import('./pages/inf-acad/inf-acad.module').then( m => m.InfAcadPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'datos-person',
    loadChildren: () => import('./pages/datos-person/datos-person.module').then( m => m.DatosPersonPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'registrarce',
    loadChildren: () => import('./pages/registrarse/registrarce.module').then( m => m.RegistrarcePageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule), canActivate: [AuthGuard]
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
