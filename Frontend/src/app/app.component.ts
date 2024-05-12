import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CreateComponent } from './components/create/create.component';
import { SocialnetComponent } from './components/socialnet/socialnet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    CreateComponent,
    SocialnetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Libroteka';
}
