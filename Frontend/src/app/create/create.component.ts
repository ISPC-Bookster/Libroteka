import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Validators,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})

// export class CreateComponent {
//   formGroup = new FormGroup({
//     name: new FormControl('', {
//       validators: [
//         Validators.required,
//         Validators.minLength(2),
//         Validators.maxLength(30),
//       ],
//     }),
//     surname: new FormControl('', {
//       validators: [
//         Validators.required,
//         Validators.minLength(2),
//         Validators.maxLength(35),
//       ],
//     }),
//     identification: new FormControl('', {
//       validators: [
//         Validators.required,
//         Validators.min(1),
//         Validators.max(99999999),
//       ],
//     }),
//     mail: new FormControl('', {
//       validators: [Validators.required, Validators.email],
//     }),
//     password: new FormControl('', {
//       validators: [Validators.required, Validators.minLength(8)],
//     }),
//     confirmpass: new FormControl('', {
//       validators: [Validators.required, Validators.minLength(8)],
//     }),
//   });
// }
export class CreateComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(35),
        ],
      ],
      identification: [
        '',
        [Validators.required, Validators.min(1), Validators.max(99999999)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpass: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
