import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';


export const ROUTES: Routes = [
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: '', pathMatch: 'full', redirectTo: ''}
  ];

