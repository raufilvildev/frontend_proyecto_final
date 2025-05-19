import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EmailConfirmationComponent } from './pages/signup/email-confirmation/email-confirmation.component';
import { SignupFormComponent } from './pages/signup/signup-form/signup-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ChangePasswordConfirmationComponent } from './pages/login/change-password-confirmation/change-password-confirmation.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent, children: [
        { path: '', component: SignupFormComponent},
        { path: 'email_confirmation', component: EmailConfirmationComponent}
    ] },
    { path: 'login', component: LoginComponent , children: [
        { path: '', component: LoginFormComponent },
        { path: 'change_password_confirmation', component: ChangePasswordConfirmationComponent },
        { path: 'change_password/:user_email', component: ChangePasswordComponent }
    ]},
    { path: 'dashboard/:user_id', component: DashboardComponent },
    { path: 'settings/:user_id', component: SettingsComponent },
    { path: '**', redirectTo: '/home' }
];
