import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import {MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollegeregistrationserviceService } from './service/collegeregistrationservice.service';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
// import { RegistrationModule } from './registration-form/registration-form.module';

@NgModule({
  declarations: [
    AppComponent,
    CollegeRegistrationComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CollegeregistrationserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
