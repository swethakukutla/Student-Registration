import { Component, OnInit } from '@angular/core';
import { CollegeDetailsResponse } from '../models/collegedetails.interface';
import { CollegeregistrationserviceService } from '../service/collegeregistrationservice.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import * as cityMock from 'src/assets/mock/cityMaster.mock';
import * as collegeMock from 'src/assets/mock/collegeList.mock';


@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.scss']
})
export class CollegeRegistrationComponent implements OnInit {
  // collegeDetails: CollegeDetailsResponse;
  form: FormGroup;
  // registrationform: FormGroup;
  cityList: any;
  collegeList: any;
  filterCollegeList: any = [];
  collegeDetails: any = [];
  constructor(private collegeRegistartionService: CollegeregistrationserviceService, public formBuilder: FormBuilder,) {
    this.cityList = cityMock.svcGetCityListData['cityDetialList'];
    this.collegeList = collegeMock.svcGetCollegeListData['collegeListData'];
  }

  ngOnInit(): void {
    // college 
    this.form = this.formBuilder.group({
      city: [null, Validators.required],
      college: [null, Validators.required]
    });


    // RegistrationForm 
    // this.registrationform = this.formBuilder.group({
    //   fname: [null, Validators.required],
    //   lname: [null, Validators.required],
    //   address: [null, Validators.required],
    //   email: [null, Validators.required],
    //   gender: [null, Validators.required]
    // });

    // this.collegeRegistartionService.getCollegeDetails().subscribe((data) => {
    //   this.collegeDetails = data;
    // });
  }

  onCityChange(selectedCity) {
    this.filterCollegeList = [];
    this.collegeList.forEach(element => {
      if (element.cityId === selectedCity.value) {
        this.filterCollegeList.push(element);
      }
    });
  }

  collegeSelected(selectedCollege): any {
    this.collegeRegistartionService.getCollegeDetails().subscribe((data) => {
      data['collegeDetailDataList'].forEach(element => {
        if (element.id === selectedCollege.value) {
          this.collegeDetails.push(element);
        }
      });
    });
  }


  // onSave() {
  //   const registrationFromData = this.registrationform.value;
  //   this.collegeRegistartionService.saveRegistrationFormData(registrationFromData).subscribe(value => {
  //   });
  // }
}
