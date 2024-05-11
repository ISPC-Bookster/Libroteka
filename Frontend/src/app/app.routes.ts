import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { BusquedaPersonalizadaComponent } from './busqueda-personalizada/busqueda-personalizada.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'create', component: CreateComponent},
    {path: 'redes-sociales', component: RedesSocialesComponent},
    {path: 'busqueda-personalizada', component: BusquedaPersonalizadaComponent},
    
    
    

    
];




