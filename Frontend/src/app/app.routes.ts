import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { BusquedaPersonalizadaComponent } from './components/busqueda-personalizada/busqueda-personalizada.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent },


];

