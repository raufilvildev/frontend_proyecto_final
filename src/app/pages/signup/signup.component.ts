import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      // Ejemplos válidos:
      // usuario@gmail.com
      // nombre.apellido+test@dominio.co.uk
      // user_123@empresa.org
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      // Ejemplos válidos:
      // +34647065168
      // 647065168
      // 123456789012345
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\+?\d{9,15}$/),
      ]),
      birthDate: new FormControl('', [Validators.required]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        // Al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/),
      ]),
      passwordRepeat: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordMatchValidator }
  );

  // https://angular.dev/guide/forms/form-validation#validating-input-in-reactive-forms
  // https://angular.dev/guide/forms/reactive-forms#grouping-form-controls
  // https://github.com/gtarrojo/act6CRUD/blob/main/src/app/pages/home/user-form/user-form.component.ts

  // validator para passwordRepeat
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordRepeat')?.value;

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
  }
}
