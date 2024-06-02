import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService {
  token = '';

  constructor() {}
  isAuth() {
    const storedToken = localStorage.getItem('auth_token'); 
    this.token = storedToken || ''; 
    return this.token.length > 0;
  }
  
}
