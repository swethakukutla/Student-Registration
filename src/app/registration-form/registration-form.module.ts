import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import { RouterModule, Routes } from '@angular/router';


const registerRoutes: Routes = [
  { path: '', component: RegistrationFormComponent }
];

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes)
  ]
})
export class RegistrationModule { }
