import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',/* Al cambiar el nombre acá se altera a que pagina cambia al iniciar el proyecto */
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
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
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'asignatura1',
    loadChildren: () => import('./pages/asig/asignatura1/asignatura1.module').then( m => m.Asignatura1PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
