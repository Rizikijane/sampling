import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './signup/signup.component';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{FormsModule} from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Page404Component } from './page404/page404.component';
import { MatFormField } from '@angular/material/input';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormField
  ]
})
export class AuthenticationModule { 
  
}
