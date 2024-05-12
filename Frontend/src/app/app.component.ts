import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CreateComponent } from './components/create/create.component';
import { SocialnetComponent } from './components/socialnet/socialnet.component';import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    RouterOutlet,
    LandingComponent,
    CreateComponent,
    SocialnetComponent,
  , NavbarComponent, FooterComponent, HeaderComponent, ContactoComponent, SobreNosotrosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Libroteka';
}
