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
      // Valid examples:
      // usuario@gmail.com
      // nombre.apellido+test@dominio.co.uk
      // user_123@empresa.org
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      // Valid examples:
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

  // validator for passwordRepeat
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordRepeat')?.value;

    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  // visual UI user input checks

  checkValidControl(controlName: string): boolean | undefined {
    return (
      this.signupForm.get(controlName)?.valid &&
      (this.signupForm.get(controlName)?.touched ||
        this.signupForm.get(controlName)?.dirty)
    );
  }

  checkInvalidControl(controlName: string): boolean | undefined {
    return (
      this.signupForm.get(controlName)?.invalid &&
      (this.signupForm.get(controlName)?.touched ||
        this.signupForm.get(controlName)?.dirty)
    );
  }

  checkErrorControl(
    controlName: string,
    errorName: string
  ): boolean | undefined {
    return (
      this.signupForm.get(controlName)?.hasError(errorName) &&
      (this.signupForm.get(controlName)?.touched ||
        this.signupForm.get(controlName)?.dirty)
    );
  }

  // SUBMIT

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
  }
}
