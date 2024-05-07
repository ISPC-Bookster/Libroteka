import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreNosotrosComponent } from "./components/sobre-nosotros/sobre-nosotros.component"
import { ContactoComponent } from './components/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SobreNosotrosComponent, ContactoComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Libroteka';
}
