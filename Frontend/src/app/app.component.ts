import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { BusquedaPersonalizadaComponent } from './busqueda-personalizada/busqueda-personalizada.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,LoginComponent,RedesSocialesComponent,BusquedaPersonalizadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Libroteka';
}
