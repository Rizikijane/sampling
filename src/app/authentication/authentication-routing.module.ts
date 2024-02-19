import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
{ path: 'signup', component: SignupComponent },
{path:'login',component:LoginComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'reset-password',component:ResetPasswordComponent},
{path:'page404', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
