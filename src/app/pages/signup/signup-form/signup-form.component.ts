import { Component, inject } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../interfaces/iuser.interface';
import dayjs from 'dayjs';

@Component({
    selector: 'app-signup-form',
    imports: [ReactiveFormsModule],
    templateUrl: './signup-form.component.html',
    styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
    usersService = inject(UsersService);
    router = inject(Router);
    signupForm = new FormGroup(
        {
            firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
            // Valid examples:
            // usuario@gmail.com
            // nombre.apellido+test@dominio.co.uk
            // user_123@empresa.org
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
            ]),
            birthDate: new FormControl('', [Validators.required]),
            gender: new FormControl('', [Validators.required]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
                Validators.pattern(/^[a-zA-Z0-9_]+$/),
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
            (this.signupForm.get(controlName)?.touched || this.signupForm.get(controlName)?.dirty)
        );
    }

    checkInvalidControl(controlName: string): boolean | undefined {
        return (
            this.signupForm.get(controlName)?.invalid &&
            (this.signupForm.get(controlName)?.touched || this.signupForm.get(controlName)?.dirty)
        );
    }

    checkErrorControl(controlName: string, errorName: string): boolean | undefined {
        return (
            this.signupForm.get(controlName)?.hasError(errorName) &&
            (this.signupForm.get(controlName)?.touched || this.signupForm.get(controlName)?.dirty)
        );
    }

    // SUBMIT

    //WIP añadir SONNER O SWEET ALERT ?? //

    async onSubmit() {
        const formValue = this.signupForm.value;
        let response: any;

        // Transformar los datos del formulario al formato para el  back
        const userRegistrationData: IUser = {
            first_name: formValue.firstName!,
            last_name: formValue.lastName!,
            email: formValue.email!,
            birth_date: dayjs(formValue.birthDate).format('YYYY-MM-DD'),
            gender: formValue.gender!,
            username: formValue.username!,
            password: formValue.password!,
        };

        console.log(userRegistrationData);

        try {
            // Check for already register on back
            response = await this.usersService.create(userRegistrationData);
            this.router.navigate(['home']);
        } catch (error) {
            console.log(error);
        }
    }
}
