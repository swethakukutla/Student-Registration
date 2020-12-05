import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { CollegeregistrationserviceService } from '../service/collegeregistrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationform: FormGroup;
  trackFlag: boolean;
  registrationFromData: any;
  constructor(public formBuilder: FormBuilder, private collegeRegistartionService: CollegeregistrationserviceService, private router: Router) {
    this.trackFlag = false;
  }

  ngOnInit(): void {
    this.registrationform = this.formBuilder.group({
      fname: [null, [Validators.required, Validators.pattern("^([a-zA-z\s]{4,32})$")]],
      lname: [null, [Validators.required, Validators.pattern("^([a-zA-z\s]{4,32})$")]],
      address: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      gender: [null, Validators.required]
    });
  }

  onSave() {
    this.registrationFromData = this.registrationform.value;
    console.log(this.registrationFromData)
    alert("Form Saved !");
    this.collegeRegistartionService.saveRegistrationFormData(this.registrationFromData).subscribe(value => {
    });
    this.trackFlag = true;
  }

  onBack() {
    this.router.navigateByUrl('');
  }

}
