import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { SocialnetComponent } from './components/shared/socialnet/socialnet.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './components/login/login.component';
import { BusquedaPersonalizadaComponent } from './components/busqueda-personalizada/busqueda-personalizada.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SocialnetComponent, 
    NavbarComponent, 
    FooterComponent, 
    HeaderComponent, 
    ContactoComponent, 
    SobreNosotrosComponent,
    LoginComponent,
    BusquedaPersonalizadaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Libroteka';
}
