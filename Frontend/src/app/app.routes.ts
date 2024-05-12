import { Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

export const routes: Routes = [
    {path: 'catalogo', component: CatalogoComponent },
    {path: 'home', component: LandingComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'} //reemplazar por componente: 404, page not fount libroteka
];
