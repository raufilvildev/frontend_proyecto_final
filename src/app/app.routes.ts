import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EmailConfirmationComponent } from './pages/signup/email-confirmation/email-confirmation.component';
import { SignupFormComponent } from './pages/signup/signup-form/signup-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'signup', component: SignupComponent, children: [
        { path: '', component: SignupFormComponent},
        { path: 'email_confirmation', component: EmailConfirmationComponent}
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard/:user_id', component: DashboardComponent },
    { path: 'settings/:user_id', component: SettingsComponent },
    { path: '**', redirectTo: '/home' }
];
