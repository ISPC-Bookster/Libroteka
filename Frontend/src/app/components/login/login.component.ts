import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      this.loginService.loginUser(this.form.value).subscribe(
        response => {
          this.successMessage = 'Login successful';
          this.errorMessage = '';
          // Handle successful login (e.g., store user token, navigate to another page)
        },
        error => {
          this.errorMessage = 'Invalid email or password';
          console.error(error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields correctly';
      this.form.markAllAsTouched();
    }
  }
}
