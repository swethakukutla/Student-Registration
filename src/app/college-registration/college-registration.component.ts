import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cityList: any;
  collegeList: any;
  filterCollegeList: any = [];
  collegeDetails: any = [];
  constructor(private collegeRegistartionService: CollegeregistrationserviceService, public formBuilder: FormBuilder, private router: Router) {
    this.cityList = cityMock.svcGetCityListData['cityDetialList'];
    this.collegeList = collegeMock.svcGetCollegeListData['collegeListData'];
  }

  ngOnInit(): void {
    // college 
    this.form = this.formBuilder.group({
      city: [null, Validators.required],
      college: [null, Validators.required]
    });
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
    this.collegeDetails = [];
    this.collegeRegistartionService.getCollegeDetails().subscribe((data) => {
      data['collegeDetailDataList'].forEach(element => {
        if (element.id === selectedCollege.value) {
          this.collegeDetails.push(element);
        }
      });
    });
  }

  goToRegistrationForm(): void {
    this.router.navigateByUrl('/register');
  }
}
