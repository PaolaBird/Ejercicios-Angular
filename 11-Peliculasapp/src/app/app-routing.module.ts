import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: BuscarComponent},
  {path: 'search/:texto', component: BuscarComponent},
  {path: 'pelicula/:id/:pag', component: PeliculaComponent},
  {path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)

