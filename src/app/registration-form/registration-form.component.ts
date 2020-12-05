import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { CollegeregistrationserviceService } from '../service/collegeregistrationservice.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationform: FormGroup;
  constructor(public formBuilder: FormBuilder, private collegeRegistartionService: CollegeregistrationserviceService) { }

  ngOnInit(): void {
    // RegistrationForm 
    this.registrationform = this.formBuilder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required]
    });
  }


  onSave() {
    const registrationFromData = this.registrationform.value;
    console.log(registrationFromData)
    alert("Saved !");
    this.collegeRegistartionService.saveRegistrationFormData(registrationFromData).subscribe(value => {
    });
  }
}
