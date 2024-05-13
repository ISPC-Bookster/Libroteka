import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { SocialnetComponent } from './components/socialnet/socialnet.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SocialnetComponent, 
    NavbarComponent, 
    FooterComponent, 
    HeaderComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Libroteka';
}
