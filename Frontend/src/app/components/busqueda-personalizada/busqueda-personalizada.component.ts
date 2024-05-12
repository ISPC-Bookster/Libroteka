import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-busqueda-personalizada',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './busqueda-personalizada.component.html',
  styleUrl: './busqueda-personalizada.component.css'
})
export class BusquedaPersonalizadaComponent {

}
