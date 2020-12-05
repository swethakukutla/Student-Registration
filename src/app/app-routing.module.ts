import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./registration-form/registration-form.module').then(m => m.RegistrationModule)
    component: CollegeRegistrationComponent
  },
  {
    path: 'register',
    // loadChildren: () => import('./registration-form/registration-form.module').then(m => m.RegistrationModule)
    component: RegistrationFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
