import { Routes } from '@angular/router';
import { SocialnetComponent } from './components/socialnet/socialnet.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  { path: 'socialnet', component: SocialnetComponent },
  { path: 'create', component: CreateComponent },
];
