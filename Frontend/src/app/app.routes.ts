import { Routes } from '@angular/router';
import { BusquedaPersonalizadaComponent } from './components/busqueda-personalizada/busqueda-personalizada.component';
import { SocialnetComponent } from './components/shared/socialnet/socialnet.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LandingComponent } from './components/landing/landing.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MasVendidosComponent } from './components/mas-vendidos/mas-vendidos.component';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent,canActivate:[authGuard] },
    {path: 'catalogo', component: CatalogoComponent,canActivate:[authGuard] },
    {path: 'home', component: LandingComponent},
    {path: 'contacto', component: ContactoComponent,canActivate:[authGuard]},
    {path: 'socialnet', component: SocialnetComponent,canActivate:[authGuard] },
    {path: 'sobre-nosotros', component: SobreNosotrosComponent,canActivate:[authGuard]},
    {path: 'create', component: CreateComponent,canActivate:[authGuard] },
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent,canActivate:[authGuard] },
    {path: 'dashboard', component: DashboardComponent,canActivate:[authGuard]},
    {path: 'mas-vendidos', component:MasVendidosComponent,canActivate:[authGuard] },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**',redirectTo: '/home', pathMatch: 'full'},
];

