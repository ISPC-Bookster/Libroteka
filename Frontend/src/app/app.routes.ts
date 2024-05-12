import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { BusquedaPersonalizadaComponent } from './components/busqueda-personalizada/busqueda-personalizada.component';
import { SocialnetComponent } from './components/socialnet/socialnet.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

export const routes: Routes = [
    {path: 'catalogo', component: CatalogoComponent },
    {path: 'home', component: LandingComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'socialnet', component: SocialnetComponent },
    {path: 'create', component: CreateComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'},//reemplazar por componente: 404, page not fount libroteka
    {path: 'login', component: LoginComponent },
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent },
];

