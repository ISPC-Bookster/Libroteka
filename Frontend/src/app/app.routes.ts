import { Routes } from '@angular/router';
import { BusquedaPersonalizadaComponent } from './components/busqueda-personalizada/busqueda-personalizada.component';
import { SocialnetComponent } from './components/shared/socialnet/socialnet.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent },
    {path: 'catalogo', component: CatalogoComponent },
    {path: 'home', component: LandingComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'socialnet', component: SocialnetComponent },
    {path: 'sobre-nosotros', component: SobreNosotrosComponent},
    {path: 'create', component: CreateComponent },
    {path: 'login', component:  LoginComponent},
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent },  
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home', pathMatch: 'full'},//reemplazar por componente: 404, page not fount libroteka

];

