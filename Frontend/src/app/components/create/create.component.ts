import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  form!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(30),
            Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+/),
          ],
        ],
        surname: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(35),
            Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+/),
          ],
        ],
        identification: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
            Validators.pattern(/^[0-9]+/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpass: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: this.checkPasswords }
    );
  }
  get Name() {
    return this.form.get('name');
  }
  get Surname() {
    return this.form.get('surname');
  }
  get Identification() {
    return this.form.get('identification');
  }
  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
  get ConfirmPass() {
    return this.form.get('confirmpass');
  }
  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      this.successMessage =
        'Recibira un correo electronico con los datos del registro';
      this.errorMessage = '';
    } else {
      this.errorMessage =
        'No se pudo crear el registro, revisa las observaciones.';
      this.form.markAllAsTouched();
    }
  }
  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmpass')?.value;
    if (pass && confirmPass && pass !== confirmPass) {
      group.get('confirmpass')?.setErrors({ notSame: true });
    } else {
      group.get('confirmpass')?.setErrors(null);
    }
    return null;
  }
  showConfirmPassMessage = false;
  ConfirmPassMsg(event: any) {
    this.showConfirmPassMessage = true;
  }
}
