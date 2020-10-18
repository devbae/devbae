import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
// import { DashboardComponent } from '../../components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// import { AuthGuard } from "../../shared/guard/auth.guard";

const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
   { path: 'dashboard', component: HomeComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }